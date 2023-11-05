import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuario } from './usuarios/entities/usuario.entity';
import { ProyectoModule } from './proyecto/proyecto.module';
import { RespositorioModule } from './respositorio/respositorio.module';
import {usuarioModule} from ./usuario/entities/usuarioModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port:3306,
      username: 'root',
      password: 'clave123',
      database: 'GIT',
      entities:[
        Usuario,
        Proyecto,
        Respositorio,
      ]
    }),
    UsuarioModule,
    ProyectoModule,
    RespositorioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
