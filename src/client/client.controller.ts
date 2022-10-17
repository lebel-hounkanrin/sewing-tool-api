import { RequestWithUser } from './../auth/request-with-user';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService){}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Req() request: RequestWithUser){
       return this.clientService.create(request.user)
    }

    @Get()
    findAll(){
        return this.clientService.findAll()
    }
}
