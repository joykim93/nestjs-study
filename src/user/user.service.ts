import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getUser() {
        return this.userRepository.find();
    }

    async createUser(data: CreateUserDto) {
        return this.userRepository.save(data);
    }
}
