import { CreateOrdonanceDto } from './dto/create-ordonance.dto';
import { UpdateOrdonanceDto } from './dto/update-ordonance.dto';
export declare class OrdonanceService {
    create(createOrdonanceDto: CreateOrdonanceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrdonanceDto: UpdateOrdonanceDto): string;
    remove(id: number): string;
}
