import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity({ name: 'songs', schema: 'public' })
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
    })
    duraction : number
    
    @Column({
        nullable: false,
    })
    year : number
}