import { SalleService } from './salle.service';
import { CreateSalleDto } from './dto/create-salle.dto';
import { UpdateSalleDto } from './dto/update-salle.dto';
export declare class SalleController {
    private readonly salleService;
    constructor(salleService: SalleService);
    create(createSalleDto: CreateSalleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSalleDto: UpdateSalleDto): string;
    remove(id: string): string;
}
