import { Module } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';
import { Songs } from '../entities/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Songs])],
  controllers: [ServicioController],
  providers: [ServicioService],
})
export class ServicioModule {}
