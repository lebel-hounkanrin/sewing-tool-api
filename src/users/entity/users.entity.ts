import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email:true;

    @Column()
    username: string;

    @Column()
    password: string
}