import { IBaseEntity } from './ibase.entity';
import { IUser } from './users.interface';
export interface IClient extends IBaseEntity {
    user:IUser
}