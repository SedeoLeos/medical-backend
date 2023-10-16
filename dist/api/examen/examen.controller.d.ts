import { ExamenService } from './examen.service';
import { CreateExamanDto } from './dto/create-examan.dto';
import { UpdateExamanDto } from './dto/update-examan.dto';
export declare class ExamenController {
    private readonly examenService;
    constructor(examenService: ExamenService);
    create(createExamanDto: CreateExamanDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateExamanDto: UpdateExamanDto): string;
    remove(id: string): string;
}
