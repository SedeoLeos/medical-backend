import { ConsultationService } from './consultation.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
export declare class ConsultationController {
    private readonly consultationService;
    constructor(consultationService: ConsultationService);
    create(createConsultationDto: CreateConsultationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConsultationDto: UpdateConsultationDto): string;
    remove(id: string): string;
}
