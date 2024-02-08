import { Module } from '@nestjs/common';
import { ServicioModule } from './servicio.api/servicio/servicio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Songs } from './servicio.api/entities/entities';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'canciones',
      entities: [
                  Songs,
                ],
      synchronize: true,
    }),
    ServicioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
