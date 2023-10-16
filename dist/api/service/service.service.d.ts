import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceService {
    create(createServiceDto: CreateServiceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateServiceDto: UpdateServiceDto): string;
    remove(id: number): string;
}
