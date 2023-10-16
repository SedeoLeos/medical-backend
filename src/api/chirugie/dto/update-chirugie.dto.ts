import { PartialType } from '@nestjs/mapped-types';
import { CreateChirugieDto } from './create-chirugie.dto';

export class UpdateChirugieDto extends PartialType(CreateChirugieDto) {}
