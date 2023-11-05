import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { usuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { usuario } from './entities/usuario.entity';

@Controller('Usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: usuarioService) {}

  @Post()
  create(@Body() createusuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createusuarioDto)
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRespositorioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateRespositorioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
