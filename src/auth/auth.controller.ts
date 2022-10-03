import { JwtAuthGuard } from './jwt-auth.guard';
import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UsersDto } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
        private readonly userService: UsersService){}

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Body() user: LoginDto, @Res() res: Response){
        const cookie =  await this.authService.login(user);
        res.setHeader('Set-Cookie', cookie);
        res.send({username:user.email})
    }

    @Post("register")
    register(@Req() req:Request, @Body() user: UsersDto){
        return this.userService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/profile")
    async getProfile(@Req() req){
        return req.user
    }
}
