import {Column,Entity, PrimaryColumn } from "typeorm";

@Entity({name:'usuarios'})
export class usuario{

    @PrimaryColumn({name:'nombre'})
    nombre:string;

    @Column({name:'clave'})
    clave:string;

    @Column({name:'correo'})
    correo:string;

    @Column({name:'nombreMostrar'})
    nombreMostrar:string;
}