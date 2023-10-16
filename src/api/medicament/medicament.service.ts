import { Injectable } from '@nestjs/common';
import { CreateMedicamentDto } from './dto/create-medicament.dto';
import { UpdateMedicamentDto } from './dto/update-medicament.dto';

@Injectable()
export class MedicamentService {
  create(createMedicamentDto: CreateMedicamentDto) {
    return 'This action adds a new medicament';
  }

  findAll() {
    return `This action returns all medicament`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicament`;
  }

  update(id: number, updateMedicamentDto: UpdateMedicamentDto) {
    return `This action updates a #${id} medicament`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicament`;
  }
}
