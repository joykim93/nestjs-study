import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { hash } from 'bcrypt'

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
        const { username, name, password } = data;
        const encryptPassword = await this.encryptPassword(password);
        return this.userRepository.save({
            username,
            name,
            password: encryptPassword
        });
    }

    async encryptPassword(password: string) {
        const DEFAULT_SALT = 11;
        return hash(password, DEFAULT_SALT);
    }
}
