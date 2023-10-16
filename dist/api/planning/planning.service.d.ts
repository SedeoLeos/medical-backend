import { CreatePlanningDto } from './dto/create-planning.dto';
import { UpdatePlanningDto } from './dto/update-planning.dto';
export declare class PlanningService {
    create(createPlanningDto: CreatePlanningDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlanningDto: UpdatePlanningDto): string;
    remove(id: number): string;
}
