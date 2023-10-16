import { HospitalisationService } from './hospitalisation.service';
import { CreateHospitalisationDto } from './dto/create-hospitalisation.dto';
import { UpdateHospitalisationDto } from './dto/update-hospitalisation.dto';
export declare class HospitalisationController {
    private readonly hospitalisationService;
    constructor(hospitalisationService: HospitalisationService);
    create(createHospitalisationDto: CreateHospitalisationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHospitalisationDto: UpdateHospitalisationDto): string;
    remove(id: string): string;
}
