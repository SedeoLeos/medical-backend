import { Injectable } from '@nestjs/common';
import { CreateOrdonanceDto } from './dto/create-ordonance.dto';
import { UpdateOrdonanceDto } from './dto/update-ordonance.dto';

@Injectable()
export class OrdonanceService {
  create(createOrdonanceDto: CreateOrdonanceDto) {
    return 'This action adds a new ordonance';
  }

  findAll() {
    return `This action returns all ordonance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordonance`;
  }

  update(id: number, updateOrdonanceDto: UpdateOrdonanceDto) {
    return `This action updates a #${id} ordonance`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordonance`;
  }
}
