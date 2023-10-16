import { Injectable } from '@nestjs/common';
import { CreateEtablissementDto } from './dto/create-etablissement.dto';
import { UpdateEtablissementDto } from './dto/update-etablissement.dto';

@Injectable()
export class EtablissementService {
  create(createEtablissementDto: CreateEtablissementDto) {
    return 'This action adds a new etablissement';
  }

  findAll() {
    return `This action returns all etablissement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} etablissement`;
  }

  update(id: number, updateEtablissementDto: UpdateEtablissementDto) {
    return `This action updates a #${id} etablissement`;
  }

  remove(id: number) {
    return `This action removes a #${id} etablissement`;
  }
}
