import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { CreateSongDto } from 'src/interfaces/interfazCreateSongs';

@Controller('servicio')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Get(':id')
  getOneSong(@Param('id') id: number){
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
  patchUsers(@Param('id') id: number, @Body() createSongDto: CreateSongDto){
    return this.servicioService.patchSongs(id, createSongDto);
  }

  @Delete(':id')
  deleteUsers(@Param('id') id: number){
    return this.servicioService.deleteSongs(id);
  }

}
