import { Injectable } from '@nestjs/common';
import { CreateChirugieDto } from './dto/create-chirugie.dto';
import { UpdateChirugieDto } from './dto/update-chirugie.dto';

@Injectable()
export class ChirugieService {
  create(createChirugieDto: CreateChirugieDto) {
    return 'This action adds a new chirugie';
  }

  findAll() {
    return `This action returns all chirugie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chirugie`;
  }

  update(id: number, updateChirugieDto: UpdateChirugieDto) {
    return `This action updates a #${id} chirugie`;
  }

  remove(id: number) {
    return `This action removes a #${id} chirugie`;
  }
}
