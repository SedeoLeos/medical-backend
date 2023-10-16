import { CreateHospitalisationDto } from './dto/create-hospitalisation.dto';
import { UpdateHospitalisationDto } from './dto/update-hospitalisation.dto';
export declare class HospitalisationService {
    create(createHospitalisationDto: CreateHospitalisationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHospitalisationDto: UpdateHospitalisationDto): string;
    remove(id: number): string;
}
