import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'Respositorios'})
export class Respositorio {

 @PrimaryColumn({name:'id'})
 id:string;

 @Column ({name: 'nombre'})
 ruta:string;

 @Column ({name: 'descripcion'})
 descripcion: string;
 
 @Column ({name: 'publico'})
 publico: boolean;

 @Column ({name: 'idProyecto'})
 idProyecto:string;

}
