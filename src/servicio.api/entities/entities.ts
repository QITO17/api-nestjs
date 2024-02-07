import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Songs{
    @PrimaryGeneratedColumn()
    id : number

    @Column({
        nullable: false,
    })
    name : string
    
    @Column({
        nullable: false,
	    default: "Diomedez dias"
    })
    author : string
    
    @Column({
        nullable: false,
	    default: "Valor por defecto"
    })
    duraction : string
    
    @Column({
        nullable: false,
	    default: "Valor por defecto"
    })
    year : string
}