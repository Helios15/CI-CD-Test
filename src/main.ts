import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('DFantasy Open Api')
    .setDescription('DFantasy api docs')
    .setVersion('2.0')
    .addTag('DFantasy api interface')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`/api/v2/api-docs`, app, document);
  await app.listen(3000);
}
bootstrap();
