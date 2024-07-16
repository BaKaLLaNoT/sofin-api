import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiVersion = app.get(ConfigService).get<string>('api_version');
  const port = Number(app.get(ConfigService).get<number>('PORT'));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.setGlobalPrefix(`api/v${apiVersion}`);
  await app.listen(port);
  console.log(
    `Server listening at http://localhost:${port}/api/v${apiVersion} 🚀🚀🚀`,
  );
}

bootstrap();
