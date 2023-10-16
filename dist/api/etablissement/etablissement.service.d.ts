import { CreateEtablissementDto } from './dto/create-etablissement.dto';
import { UpdateEtablissementDto } from './dto/update-etablissement.dto';
export declare class EtablissementService {
    create(createEtablissementDto: CreateEtablissementDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEtablissementDto: UpdateEtablissementDto): string;
    remove(id: number): string;
}
