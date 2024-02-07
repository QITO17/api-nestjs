import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { CreateSongDto } from 'src/interfaces/interfazCreateSongs';

@Controller('servicio')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Get(':id')
  getOneSong(@Param('id') id: string){
    return this.servicioService.getOne(id);
  }

  @Get()
  getAllSongs(){
    return this.servicioService.getAll();
  }

  @Post()
  postSongs(@Body() createSongDto: CreateSongDto){
    return this.servicioService.postSongs(createSongDto);
  }

  @Patch(':id')
  patchUsers(@Param('id') id: string){
    return this.servicioService.patchSongs(id);
  }

  @Delete(':id')
  deleteUsers(@Param('id') id: string){
    return this.servicioService.deleteSongs(id);
  }

}
