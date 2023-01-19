import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post, Request, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Karna pake password, tiap ngakses link auth/login akan masuk ke file local.strategy buat check authorization
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() request: any) {
    return this.authService.login(request.user);
  }
}
