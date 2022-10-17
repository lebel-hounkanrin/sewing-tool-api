import { Users } from 'src/users/entity/users.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IClient } from './../../core/interfaces/client.interface';

@Entity()
export class Client implements IClient{
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @OneToOne(()=> Users)
    @JoinColumn()
    user:Users  
}