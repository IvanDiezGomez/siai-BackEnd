import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AlertasModule } from '../alertas/alertas.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { UsersModule } from '../users/users.module.js';
import { RegistroModule } from '../registro/registro.module.js';
import { ReportesModule } from '../reportes/reportes.module.js';



export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? '',
      appSecret: process.env.OBSERVE_APP_SECRET ?? '',
      serviceId: 'siai-backend',
    }),
    AlertasModule,
    AuthModule,
    UsersModule,
    RegistroModule,
    ReportesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
