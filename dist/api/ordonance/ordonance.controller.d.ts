import { OrdonanceService } from './ordonance.service';
import { CreateOrdonanceDto } from './dto/create-ordonance.dto';
import { UpdateOrdonanceDto } from './dto/update-ordonance.dto';
export declare class OrdonanceController {
    private readonly ordonanceService;
    constructor(ordonanceService: OrdonanceService);
    create(createOrdonanceDto: CreateOrdonanceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrdonanceDto: UpdateOrdonanceDto): string;
    remove(id: string): string;
}
