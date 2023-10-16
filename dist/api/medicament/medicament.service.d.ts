import { CreateMedicamentDto } from './dto/create-medicament.dto';
import { UpdateMedicamentDto } from './dto/update-medicament.dto';
export declare class MedicamentService {
    create(createMedicamentDto: CreateMedicamentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMedicamentDto: UpdateMedicamentDto): string;
    remove(id: number): string;
}
