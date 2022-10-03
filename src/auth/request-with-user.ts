import { Request } from 'express';
import { Users } from 'src/users/entity/users.entity';

export interface RequestWithUser extends Request {
  user: Users;
}

export default RequestWithUser;