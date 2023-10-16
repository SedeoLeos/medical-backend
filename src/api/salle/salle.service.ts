import { Injectable } from '@nestjs/common';
import { CreateSalleDto } from './dto/create-salle.dto';
import { UpdateSalleDto } from './dto/update-salle.dto';

@Injectable()
export class SalleService {
  create(createSalleDto: CreateSalleDto) {
    return 'This action adds a new salle';
  }

  findAll() {
    return `This action returns all salle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salle`;
  }

  update(id: number, updateSalleDto: UpdateSalleDto) {
    return `This action updates a #${id} salle`;
  }

  remove(id: number) {
    return `This action removes a #${id} salle`;
  }
}
