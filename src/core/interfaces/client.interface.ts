import { Users } from 'src/users/entity/users.entity';
import { IBaseEntity } from './ibase.entity';
export interface IClient extends IBaseEntity {
    user:Users
}