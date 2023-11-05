import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { UsuarioDto } from "../dto/usuario.dto";
import { usuario} from "../entities/usuario.entity";


export class UsuarioMapper {

    static toDto(entidad: usuario): UsuarioDto{

        const dto= new UsuarioDto();
        dto.nombre=entidad.nombre;
        dto.correo = entidad.correo;
        dto.nombreMostrar = entidad.nombreMostrar;
        return dto; 
    }
    static toDtoList (entidades : usuario []) UsuarioDto [] {
        return entidades .map ((entidad) => this.toDo(entidad));
    }

    static toEntity(dto: CreateUsuarioDto): usuario {
        const entidad =new UsuarioDto();
        entidad.nombre = dto.nombre;
        entidad.correo = dto.correo;
        entidad.nombreMostrar = dto.nombreMostrar;
        entidad.clave=dto.clave;
        return entidad;
    }
}