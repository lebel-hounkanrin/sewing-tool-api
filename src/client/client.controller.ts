import { Controller, Post, Req } from '@nestjs/common';

@Controller('client')
export class ClientController {

    @Post()
    login(@Req() req: Request){
        
    }
}
