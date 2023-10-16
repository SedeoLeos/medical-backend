import { CreateExamanDto } from './dto/create-examan.dto';
import { UpdateExamanDto } from './dto/update-examan.dto';
export declare class ExamenService {
    create(createExamanDto: CreateExamanDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExamanDto: UpdateExamanDto): string;
    remove(id: number): string;
}
