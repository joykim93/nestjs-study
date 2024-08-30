import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/entity/board.entity';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {

    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ) {}

    async create(data: CreateBoardDto) {
        return this.boardRepository.save(data);
    }

}
