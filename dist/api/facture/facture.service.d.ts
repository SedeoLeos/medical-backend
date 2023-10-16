import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
export declare class FactureService {
    create(createFactureDto: CreateFactureDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFactureDto: UpdateFactureDto): string;
    remove(id: number): string;
}
