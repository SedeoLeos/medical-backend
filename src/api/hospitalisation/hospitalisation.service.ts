import { Injectable } from '@nestjs/common';
import { CreateHospitalisationDto } from './dto/create-hospitalisation.dto';
import { UpdateHospitalisationDto } from './dto/update-hospitalisation.dto';

@Injectable()
export class HospitalisationService {
  create(createHospitalisationDto: CreateHospitalisationDto) {
    return 'This action adds a new hospitalisation';
  }

  findAll() {
    return `This action returns all hospitalisation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hospitalisation`;
  }

  update(id: number, updateHospitalisationDto: UpdateHospitalisationDto) {
    return `This action updates a #${id} hospitalisation`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospitalisation`;
  }
}
