import { Request, Response } from "express";

import { CreateSpeficicationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(
        private createSpecificationUseCase: CreateSpeficicationUseCase
    ) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createSpecificationUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationController };
