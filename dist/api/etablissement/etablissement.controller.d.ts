import { EtablissementService } from './etablissement.service';
import { CreateEtablissementDto } from './dto/create-etablissement.dto';
import { UpdateEtablissementDto } from './dto/update-etablissement.dto';
export declare class EtablissementController {
    private readonly etablissementService;
    constructor(etablissementService: EtablissementService);
    create(createEtablissementDto: CreateEtablissementDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEtablissementDto: UpdateEtablissementDto): string;
    remove(id: string): string;
}
