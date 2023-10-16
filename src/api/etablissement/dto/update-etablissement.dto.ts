import { PartialType } from '@nestjs/mapped-types';
import { CreateEtablissementDto } from './create-etablissement.dto';

export class UpdateEtablissementDto extends PartialType(CreateEtablissementDto) {}
