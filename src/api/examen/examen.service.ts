import { Injectable } from '@nestjs/common';
import { CreateExamanDto } from './dto/create-examan.dto';
import { UpdateExamanDto } from './dto/update-examan.dto';

@Injectable()
export class ExamenService {
  create(createExamanDto: CreateExamanDto) {
    return 'This action adds a new examan';
  }

  findAll() {
    return `This action returns all examen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examan`;
  }

  update(id: number, updateExamanDto: UpdateExamanDto) {
    return `This action updates a #${id} examan`;
  }

  remove(id: number) {
    return `This action removes a #${id} examan`;
  }
}
