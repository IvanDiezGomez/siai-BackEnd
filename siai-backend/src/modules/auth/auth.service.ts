import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.js';
import { LoginAuthDto } from './dto/create-auth.dto.js';
import { RegisterAuthDto } from './dto/update-auth.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerAuthDto: RegisterAuthDto) {
    const email = registerAuthDto.email.trim().toLowerCase();
    const existingUser = await this.prisma.usuarios.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Ya existe un usuario con este correo');
    }

    const passwordHash = await bcrypt.hash(registerAuthDto.password, 10);

    const user = await this.prisma.usuarios.create({
      data: {
        nombre: registerAuthDto.nombre,
        apellido: registerAuthDto.apellido,
        email,
        password: passwordHash,
      },
    });

    const { password, ...safeUser } = user;
    void password;

    return safeUser;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const email = loginAuthDto.email.trim().toLowerCase();
    const user = await this.prisma.usuarios.findUnique({
      where: { email },
    });

    if (
      !user ||
      !(await bcrypt.compare(loginAuthDto.password, user.password))
    ) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    if (!user.estado) {
      throw new UnauthorizedException('El usuario se encuentra inactivo');
    }

    const payload = {
      sub: user.id_usuario,
      email: user.email,
      rol: user.rol,
    };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      access_token: accessToken,
      user: {
        id_usuario: user.id_usuario,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        rol: user.rol,
        estado: user.estado,
      },
    };
  }
}
