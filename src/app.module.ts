import { Module } from '@nestjs/common';
import { ServicioModule } from './servicio.api/servicio/servicio.module';

@Module({
  imports: [ServicioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
