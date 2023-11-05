import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'Proyectos'})
export class Proyecto {

  @PrimaryColumn({name:'id'})
    id:string;

    @Column({name:'nombre'})
    nombre:string;
}
