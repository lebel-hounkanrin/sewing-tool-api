import { Users } from './entity/users.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [UsersService]
})
export class UsersModule {}
