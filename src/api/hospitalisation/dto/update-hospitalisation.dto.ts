import { PartialType } from '@nestjs/mapped-types';
import { CreateHospitalisationDto } from './create-hospitalisation.dto';

export class UpdateHospitalisationDto extends PartialType(CreateHospitalisationDto) {}
