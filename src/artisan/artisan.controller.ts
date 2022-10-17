import { RequestWithUser } from './../auth/request-with-user';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ArtisanService } from './artisan.service';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

@Controller('artisan')
export class ArtisanController {
    constructor(
        private readonly artisanService: ArtisanService
    ){}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Req() req: RequestWithUser){
        return this.artisanService.create(req.user)
    }
}
