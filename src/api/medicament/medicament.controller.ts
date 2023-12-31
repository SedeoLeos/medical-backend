import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicamentService } from './medicament.service';
import { CreateMedicamentDto } from './dto/create-medicament.dto';
import { UpdateMedicamentDto } from './dto/update-medicament.dto';

@Controller('medicament')
export class MedicamentController {
  constructor(private readonly medicamentService: MedicamentService) {}

  @Post()
  create(@Body() createMedicamentDto: CreateMedicamentDto) {
    return this.medicamentService.create(createMedicamentDto);
  }

  @Get()
  findAll() {
    return this.medicamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicamentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicamentDto: UpdateMedicamentDto) {
    return this.medicamentService.update(+id, updateMedicamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicamentService.remove(+id);
  }
}
