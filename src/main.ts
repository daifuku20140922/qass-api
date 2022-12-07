import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: console,
  });

  // Hide Server Information
  app.disable('x-powered-by');

  // ignore undefined props.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('qass-api')
    .setDescription('Qrcode ASSet management API description')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  // if use environment variable, must enable port forwarding to container
  await app.listen(process.env.SERVER_PORT || 3030);
}
bootstrap();
