import { Request, Body, Controller, Post, UseGuards } from '@nestjs/common';
import { BoardService } from './board.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserInfo } from 'src/decorator/user-info.decorator';

@Controller('board')
export class BoardController {
    constructor(
        private boardService: BoardService
    ) {}
    
    @Post()
    @UseGuards(JwtAuthGuard)
    async create(
        @UserInfo() userInfo,
        @Body('contents') contents: string
    ) {
        return this.boardService.create({
            userId: userInfo.id,
            contents: contents
        })
    }

}
