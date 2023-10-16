import { PlanningService } from './planning.service';
import { CreatePlanningDto } from './dto/create-planning.dto';
import { UpdatePlanningDto } from './dto/update-planning.dto';
export declare class PlanningController {
    private readonly planningService;
    constructor(planningService: PlanningService);
    create(createPlanningDto: CreatePlanningDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlanningDto: UpdatePlanningDto): string;
    remove(id: string): string;
}
