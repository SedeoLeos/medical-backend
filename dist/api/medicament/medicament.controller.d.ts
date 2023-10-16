import { MedicamentService } from './medicament.service';
import { CreateMedicamentDto } from './dto/create-medicament.dto';
import { UpdateMedicamentDto } from './dto/update-medicament.dto';
export declare class MedicamentController {
    private readonly medicamentService;
    constructor(medicamentService: MedicamentService);
    create(createMedicamentDto: CreateMedicamentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMedicamentDto: UpdateMedicamentDto): string;
    remove(id: string): string;
}
