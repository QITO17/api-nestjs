import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';  
import { Songs } from '../entities/entities';
import { CreateSongDto } from 'src/interfaces/interfazCreateSongs';


@Injectable()
export class ServicioService {

    constructor(  @InjectRepository(Songs) private songRepository: Repository<Songs>, ){}

    async getOne(id : number ) {

        try {
            
            const data = await this.songRepository.findOneBy({ id });

            if(!data) throw new BadRequestException('Usuario no encontrado el id ' + id + ' No esta contemplado');

            return JSON.stringify(data); 

        } catch (error) {

            if(error instanceof BadRequestException) throw error
            
            throw new InternalServerErrorException(error, 'Error de servidor 😭😭😭😭');

        }
    }

    async getAll() {
        
        try {

            const data = await this.songRepository.find();
            if(data[0]) return JSON.stringify(data); 
            throw new BadRequestException('Usuario no encontrados, no hay usuarios');

        } catch (error) {

            if(error instanceof BadRequestException) throw error

            throw new InternalServerErrorException(error, 'Error de servidor 😭😭😭😭');

        }
    }

    async postSongs( CreateSongDto: CreateSongDto) {

        try {
            
            const userCreated = this.songRepository.create(CreateSongDto);

            if(userCreated) return await this.songRepository.save(CreateSongDto);

            throw new BadRequestException('No se puede crear el usuario con estos datos \n ' + CreateSongDto);

        } catch (error) {
            
            if(error instanceof BadRequestException) throw error

            throw new InternalServerErrorException(error, 'Error de servidor 😭😭😭😭');

        }
    
    }

    async patchSongs(id : number, song : CreateSongDto) {

        console.log('LLego ' + id + ' data ' + JSON.stringify(song))

        const data = await this.songRepository.update(id, song);  

        return 'Vas a actualizar la song del id ' + data; 

    }

    async deleteSongs(id : number) {
        
        try {
            
            const data = await this.songRepository.delete(id);  

            const registro = data.affected;

            console.log(registro)

            if(registro === 0) throw new BadRequestException('Song not found');
            
            return JSON.stringify(data); 

        }        
        catch (error) {

            if(error instanceof BadRequestException) throw error
         
            throw new InternalServerErrorException(error, 'Internal Server Error 😭😭😭😭');

        }
        
    }

}
