import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "src/user/dtos/register.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService){}

        @Post('register')
        @HttpCode(HttpStatus.OK)
        register(@Body() dto: RegisterDto){
            return this.authService.register(dto);
        }
}