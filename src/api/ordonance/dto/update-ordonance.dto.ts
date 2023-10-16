import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdonanceDto } from './create-ordonance.dto';

export class UpdateOrdonanceDto extends PartialType(CreateOrdonanceDto) {}
