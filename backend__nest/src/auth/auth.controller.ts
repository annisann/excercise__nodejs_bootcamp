import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Karna pake password, tiap ngakses link auth/login akan masuk ke file local.strategy buat check authorization
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() body: any) {
    // return this.authService.login(body.username);
    return this.authService.validateUser(body.username, body.password);
  }
}
