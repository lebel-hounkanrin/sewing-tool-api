import { RequestWithUser } from './../auth/request-with-user';
import { AtelierService } from './atelier.service';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AtelierDto } from './dto/atelier.dto';

@Controller('atelier')
export class AtelierController {
    constructor(
        private atelierService: AtelierService
    ){}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Req() request : RequestWithUser, @Body() atelierDto: AtelierDto){
        return this.atelierService.create(request.user, atelierDto)
    }
}
