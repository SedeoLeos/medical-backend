import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { CreateEtablissementDto } from './dto/create-etablissement.dto';
import { UpdateEtablissementDto } from './dto/update-etablissement.dto';

@Controller('etablissement')
export class EtablissementController {
  constructor(private readonly etablissementService: EtablissementService) {}

  @Post()
  create(@Body() createEtablissementDto: CreateEtablissementDto) {
    return this.etablissementService.create(createEtablissementDto);
  }

  @Get()
  findAll() {
    return this.etablissementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.etablissementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtablissementDto: UpdateEtablissementDto) {
    return this.etablissementService.update(+id, updateEtablissementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etablissementService.remove(+id);
  }
}
