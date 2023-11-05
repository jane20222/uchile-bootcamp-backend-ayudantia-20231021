import { PartialType } from '@nestjs/mapped-types';
import { CreateRespositorioDto } from './create-respositorio.dto';

export class UpdateRespositorioDto extends PartialType(CreateRespositorioDto) {}
