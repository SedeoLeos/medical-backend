import { Injectable } from '@nestjs/common';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';

@Injectable()
export class FactureService {
  create(createFactureDto: CreateFactureDto) {
    return 'This action adds a new facture';
  }

  findAll() {
    return `This action returns all facture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facture`;
  }

  update(id: number, updateFactureDto: UpdateFactureDto) {
    return `This action updates a #${id} facture`;
  }

  remove(id: number) {
    return `This action removes a #${id} facture`;
  }
}
