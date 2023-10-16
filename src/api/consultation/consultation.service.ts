import { Injectable } from '@nestjs/common';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';

@Injectable()
export class ConsultationService {
  create(createConsultationDto: CreateConsultationDto) {
    return 'This action adds a new consultation';
  }

  findAll() {
    return `This action returns all consultation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consultation`;
  }

  update(id: number, updateConsultationDto: UpdateConsultationDto) {
    return `This action updates a #${id} consultation`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultation`;
  }
}
