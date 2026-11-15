node.exe : Loaded Prisma config from prisma.config.ts.
En línea: 1 Carácter: 1
+ & "C:\Program Files\nodejs/node.exe" "C:\Program Files\nodejs/node_mo ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (Loaded Prisma c...isma.config.ts.:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "rol" VARCHAR(50) NOT NULL DEFAULT 'usuario',
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "estaciones" (
    "id_estacion" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "ubicacion" VARCHAR(255) NOT NULL,
    "latitud" DECIMAL(10,7),
    "longitud" DECIMAL(10,7),
    "estado" VARCHAR(30) NOT NULL DEFAULT 'activa',
    "fecha_instalacion" DATE,

    CONSTRAINT "estaciones_pkey" PRIMARY KEY ("id_estacion")
);

-- CreateTable
CREATE TABLE "zonas_riesgo" (
    "id_zona" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "nivel_riesgo" VARCHAR(30) NOT NULL,
    "latitud" DECIMAL(10,7),
    "longitud" DECIMAL(10,7),

    CONSTRAINT "zonas_riesgo_pkey" PRIMARY KEY ("id_zona")
);

-- CreateTable
CREATE TABLE "sensores" (
    "id_sensor" SERIAL NOT NULL,
    "id_estacion" INTEGER NOT NULL,
    "tipo" VARCHAR(50) NOT NULL,
    "modelo" VARCHAR(100),
    "unidad" VARCHAR(20),
    "estado" VARCHAR(30) NOT NULL DEFAULT 'activo',

    CONSTRAINT "sensores_pkey" PRIMARY KEY ("id_sensor")
);

-- CreateTable
CREATE TABLE "mediciones" (
    "id_medicion" SERIAL NOT NULL,
    "id_sensor" INTEGER NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "fecha_hora" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mediciones_pkey" PRIMARY KEY ("id_medicion")
);

-- CreateTable
CREATE TABLE "alertas" (
    "id_alerta" SERIAL NOT NULL,
    "id_estacion" INTEGER NOT NULL,
    "id_zona" INTEGER NOT NULL,
    "nivel" VARCHAR(30) NOT NULL,
    "mensaje" TEXT NOT NULL,
    "fecha_hora" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" VARCHAR(30) NOT NULL DEFAULT 'activa',

    CONSTRAINT "alertas_pkey" PRIMARY KEY ("id_alerta")
);

-- CreateTable
CREATE TABLE "historial_alertas" (
    "id_historial" SERIAL NOT NULL,
    "id_alerta" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "accion" VARCHAR(100) NOT NULL,
    "fecha_hora" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observacion" TEXT,

    CONSTRAINT "historial_alertas_pkey" PRIMARY KEY ("id_historial")
);

-- CreateTable
CREATE TABLE "notificaciones" (
    "id_notificacion" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_alerta" INTEGER NOT NULL,
    "mensaje" TEXT NOT NULL,
    "fecha_hora" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leida" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "notificaciones_pkey" PRIMARY KEY ("id_notificacion")
);

-- CreateTable
CREATE TABLE "tipos_reportes" (
    "id_tipo_reporte" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "estado" BOOLEAN DEFAULT true,

    CONSTRAINT "tipos_reportes_pkey" PRIMARY KEY ("id_tipo_reporte")
);

-- CreateTable
CREATE TABLE "reportes" (
    "id_reporte" SERIAL NOT NULL,
    "titulo" VARCHAR(150) NOT NULL,
    "descripcion" TEXT,
    "id_tipo_reporte" INTEGER NOT NULL,
    "fecha_desde" DATE,
    "fecha_hasta" DATE,
    "fecha_generacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "formato" VARCHAR(20) DEFAULT 'PDF',
    "estado" VARCHAR(20) DEFAULT 'pendiente',
    "id_usuario" INTEGER,

    CONSTRAINT "reportes_pkey" PRIMARY KEY ("id_reporte")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE INDEX "sensores_id_estacion_idx" ON "sensores"("id_estacion");

-- CreateIndex
CREATE INDEX "mediciones_id_sensor_idx" ON "mediciones"("id_sensor");

-- CreateIndex
CREATE INDEX "alertas_id_estacion_idx" ON "alertas"("id_estacion");

-- CreateIndex
CREATE INDEX "alertas_id_zona_idx" ON "alertas"("id_zona");

-- CreateIndex
CREATE INDEX "historial_alertas_id_alerta_idx" ON "historial_alertas"("id_alerta");

-- CreateIndex
CREATE INDEX "historial_alertas_id_usuario_idx" ON "historial_alertas"("id_usuario");

-- CreateIndex
CREATE INDEX "notificaciones_id_usuario_idx" ON "notificaciones"("id_usuario");

-- CreateIndex
CREATE INDEX "notificaciones_id_alerta_idx" ON "notificaciones"("id_alerta");

-- CreateIndex
CREATE UNIQUE INDEX "tipos_reportes_nombre_key" ON "tipos_reportes"("nombre");

-- CreateIndex
CREATE INDEX "reportes_id_tipo_reporte_idx" ON "reportes"("id_tipo_reporte");

-- CreateIndex
CREATE INDEX "reportes_id_usuario_idx" ON "reportes"("id_usuario");

-- AddForeignKey
ALTER TABLE "sensores" ADD CONSTRAINT "sensores_id_estacion_fkey" FOREIGN KEY ("id_estacion") REFERENCES "estaciones"("id_estacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mediciones" ADD CONSTRAINT "mediciones_id_sensor_fkey" FOREIGN KEY ("id_sensor") REFERENCES "sensores"("id_sensor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alertas" ADD CONSTRAINT "alertas_id_estacion_fkey" FOREIGN KEY ("id_estacion") REFERENCES "estaciones"("id_estacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alertas" ADD CONSTRAINT "alertas_id_zona_fkey" FOREIGN KEY ("id_zona") REFERENCES "zonas_riesgo"("id_zona") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historial_alertas" ADD CONSTRAINT "historial_alertas_id_alerta_fkey" FOREIGN KEY ("id_alerta") REFERENCES "alertas"("id_alerta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historial_alertas" ADD CONSTRAINT "historial_alertas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificaciones" ADD CONSTRAINT "notificaciones_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificaciones" ADD CONSTRAINT "notificaciones_id_alerta_fkey" FOREIGN KEY ("id_alerta") REFERENCES "alertas"("id_alerta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reportes" ADD CONSTRAINT "reportes_id_tipo_reporte_fkey" FOREIGN KEY ("id_tipo_reporte") REFERENCES "tipos_reportes"("id_tipo_reporte") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reportes" ADD CONSTRAINT "reportes_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE SET NULL ON UPDATE CASCADE;

