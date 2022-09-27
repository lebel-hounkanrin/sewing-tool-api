import { JwtAuthGuard } from './jwt-auth.guard';
import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersDto } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
        private readonly userService: UsersService){}

    @Post("login")
    async login(@Body() user: LoginDto, @Req() req:Request){
        console.log(req.body)
        return this.authService.login(user)
    }

    @Post("register")
    register(@Req() req:Request, @Body() user: UsersDto){
        return this.userService.create(user);
    }
}
