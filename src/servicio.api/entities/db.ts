import { TypeOrmModule } from '@nestjs/typeorm';
import { Songs } from '../entities/entities';

TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Canciones',
    //...
    entities: [Songs]
});