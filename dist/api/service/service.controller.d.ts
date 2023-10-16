import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
    create(createServiceDto: CreateServiceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateServiceDto: UpdateServiceDto): string;
    remove(id: string): string;
}
