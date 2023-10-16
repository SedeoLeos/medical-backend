import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HospitalisationService } from './hospitalisation.service';
import { CreateHospitalisationDto } from './dto/create-hospitalisation.dto';
import { UpdateHospitalisationDto } from './dto/update-hospitalisation.dto';

@Controller('hospitalisation')
export class HospitalisationController {
  constructor(private readonly hospitalisationService: HospitalisationService) {}

  @Post()
  create(@Body() createHospitalisationDto: CreateHospitalisationDto) {
    return this.hospitalisationService.create(createHospitalisationDto);
  }

  @Get()
  findAll() {
    return this.hospitalisationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalisationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHospitalisationDto: UpdateHospitalisationDto) {
    return this.hospitalisationService.update(+id, updateHospitalisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospitalisationService.remove(+id);
  }
}
