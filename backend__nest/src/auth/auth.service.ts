import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username, password) {
    const user = await this.userService.findBy(username);
    if (user) {
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (passwordMatch) {
        return user;
      } else {
        return `Wrong password`;
      }
    } else {
      return null;
    }
  }

  async login(user: any) {
    const payload = {
      username: user.username,
    };

    return {
      message: 'Login succeed!',

      // Token for headers
      access_token: this.jwtService.sign(payload),
    };
  }
}
