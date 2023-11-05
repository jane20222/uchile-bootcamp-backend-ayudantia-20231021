import { Injectable } from '@nestjs/common';
import { CreateRespositorioDto } from './dto/create-respositorio.dto';
import { UpdateRespositorioDto } from './dto/update-respositorio.dto';

@Injectable()
export class RespositorioService {
  create(createRespositorioDto: CreateRespositorioDto) {
    return 'This action adds a new respositorio';
  }

  findAll() {
    return `This action returns all respositorio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} respositorio`;
  }

  update(id: number, updateRespositorioDto: UpdateRespositorioDto) {
    return `This action updates a #${id} respositorio`;
  }

  remove(id: number) {
    return `This action removes a #${id} respositorio`;
  }
}
