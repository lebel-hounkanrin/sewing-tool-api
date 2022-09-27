import { Users } from 'src/users/entity/users.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IClient } from './../../core/interfaces/client.interface';

@Entity()
export class Client implements IClient{
    @PrimaryGeneratedColumn("uuid")
    id: string
    user:Users
}