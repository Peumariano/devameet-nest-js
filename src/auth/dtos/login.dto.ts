import { IsEmail, IsNotEmpty } from "class-validator";
import { MessagesHelper } from "../helpers/messages.helper";

export class LoginDto {
    @IsEmail({}, {message: MessagesHelper.AUTH_LOGIN_NOT_FOUND})
    login: string;
    //antes mesmo de chegar no controller eu posso executar a validação usando um decorator

    @IsNotEmpty({message: MessagesHelper.AUTH_PASSWORD_NOT_FOUND})
    password: string;
}