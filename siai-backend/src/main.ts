import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './modules/App/app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  const port = Number(process.env.PORT ?? 4002);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid PORT value: ${process.env.PORT}`);
  }

  await app.listen(port);
  console.log(`Server listening on port ${port}`);
}

await bootstrap();
