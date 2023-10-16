import { ChirugieService } from './chirugie.service';
import { CreateChirugieDto } from './dto/create-chirugie.dto';
import { UpdateChirugieDto } from './dto/update-chirugie.dto';
export declare class ChirugieController {
    private readonly chirugieService;
    constructor(chirugieService: ChirugieService);
    create(createChirugieDto: CreateChirugieDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChirugieDto: UpdateChirugieDto): string;
    remove(id: string): string;
}
