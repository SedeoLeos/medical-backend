import { FactureService } from './facture.service';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
export declare class FactureController {
    private readonly factureService;
    constructor(factureService: FactureService);
    create(createFactureDto: CreateFactureDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFactureDto: UpdateFactureDto): string;
    remove(id: string): string;
}
