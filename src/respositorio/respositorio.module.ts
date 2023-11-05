import { Module } from '@nestjs/common';
import { RespositorioService } from './respositorio.service';
import { RespositorioController } from './respositorio.controller';

@Module({
  controllers: [RespositorioController],
  providers: [RespositorioService],
})
export class RespositorioModule {}
