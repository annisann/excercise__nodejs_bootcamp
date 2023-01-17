import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'model/entities/Users';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<any> {
    return await this.userRepository.find();
  }

  async findBy(usernameToFind: string): Promise<any> {
    return await this.userRepository.findOne({
      where: {
        username: usernameToFind,
      },
    });
  }

  async createNew(newUser): Promise<any> {
    // Password
    const password = newUser.password;
    const passSalt = await bcrypt.genSalt();
    const passHash = bcrypt.hashSync(password, passSalt);

    await this.userRepository.insert({
      username: newUser.username,
      passhash: passHash,
    });

    return this.findBy(newUser.username);
  }
}
