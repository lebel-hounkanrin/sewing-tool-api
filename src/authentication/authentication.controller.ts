import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('authentication')
export class AuthenticationController {
    constructor(private authenticationService: AuthenticationService){}

    @Post("register")
    register(@Body() userDto: CreateUserDto){
        return this.authenticationService.register(userDto)
    }
}
