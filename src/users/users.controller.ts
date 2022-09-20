import { UsersService } from './users.service';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { Request } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Post("create")
    register(@Req() req:Request, @Body() user: UsersDto){
        return this.usersService.create(user);
    }
}
