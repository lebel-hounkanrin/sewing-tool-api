import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './../../core/interfaces/users.interface';
import { Exclude } from 'class-transformer';
import * as bcrypt from "bcrypt"
@Entity()
export class Users implements IUser{
    @PrimaryGeneratedColumn("uuid")
    id:string;
    
    @Column({type: "varchar", nullable:false})
    name: string;

    @Column({unique: true})
    email: string;

    @Column({type: "varchar", nullable:true})
    phoneNumber: string;

    @Column({ nullable: true })
    @Exclude({ toPlainOnly: true })
    password?: string;

    @BeforeInsert()
    private async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10)
    }
   
}