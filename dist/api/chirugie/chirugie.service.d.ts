import { CreateChirugieDto } from './dto/create-chirugie.dto';
import { UpdateChirugieDto } from './dto/update-chirugie.dto';
export declare class ChirugieService {
    create(createChirugieDto: CreateChirugieDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChirugieDto: UpdateChirugieDto): string;
    remove(id: number): string;
}
