import { PartialType } from '@nestjs/mapped-types';
import { CreateSalleDto } from './create-salle.dto';

export class UpdateSalleDto extends PartialType(CreateSalleDto) {}
