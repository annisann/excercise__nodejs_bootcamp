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

  async validateUser(username: string, password: string) {
    const user = await this.userService.findBy(username);

    if (user) {
      const passwordMatch = bcrypt.compareSync(password, user.passhash);

      if (passwordMatch) {
        // return user;
        return {
          message: 'Login succeed!',

          // Token for headers
          access_token: this.jwtService.sign({
            username: username,
            password: password,
          }),
        };
      } else {
        return `Wrong password`;
      }
    } else {
      return `User not found!`;
    }
  }

  // async login(user: any) {
  //   const payload = {
  //     username: user.username,
  //     // password: user.password,
  //   };

  //   return {
  //     message: 'Login succeed!',

  //     // Token for headers
  //     access_token: this.jwtService.sign(payload),
  //   };
  }
}
