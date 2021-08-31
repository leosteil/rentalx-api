import { isConstructorToken } from "tsyringe/dist/typings/providers/injection-token";

export class AppError {
    public readonly message: string;

    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
