import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RespositorioService } from './respositorio.service';
import { CreateRespositorioDto } from './dto/create-respositorio.dto';
import { UpdateRespositorioDto } from './dto/update-respositorio.dto';

@Controller('respositorio')
export class RespositorioController {
  constructor(private readonly respositorioService: RespositorioService) {}

  @Post()
  create(@Body() createRespositorioDto: CreateRespositorioDto) {
    return this.respositorioService.create(createRespositorioDto);
  }

  @Get()
  findAll() {
    return this.respositorioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.respositorioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRespositorioDto: UpdateRespositorioDto) {
    return this.respositorioService.update(+id, updateRespositorioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.respositorioService.remove(+id);
  }
}
