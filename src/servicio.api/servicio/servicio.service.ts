import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSongDto } from 'src/interfaces/interfazCreateSongs';
import { Repository } from 'typeorm';  
import { Songs } from '../entities/entities';

@Injectable()
export class ServicioService {

    constructor( ){}

    async getOne(id : string) {
        return 'Vas a obtener la song del id ' + id; 
    }

    async getAll() {
        //const songs = await this.songRepository.find();

        return 'Vas a obtener las songs'; 
    }

    async postSongs(createSongDto : CreateSongDto) {
    return 'Vas a crear la song \n' + JSON.stringify(createSongDto); 
    }

    async patchSongs(id : string) {
        return 'Vas a actualizar la song del id ' + id; 
    }

    async deleteSongs(id : string) {
        return 'Vas a Eliminar la song del id ' + id; 
    }

}
