import { CreateSalleDto } from './dto/create-salle.dto';
import { UpdateSalleDto } from './dto/update-salle.dto';
export declare class SalleService {
    create(createSalleDto: CreateSalleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSalleDto: UpdateSalleDto): string;
    remove(id: number): string;
}
