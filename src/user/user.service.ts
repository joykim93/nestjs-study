import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @Injectable(User)
        private userRepository: Repository<User>,
    ) {}

    async getUser() {
        return this.userRepository.find();
    }
}
