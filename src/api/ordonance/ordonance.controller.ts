import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdonanceService } from './ordonance.service';
import { CreateOrdonanceDto } from './dto/create-ordonance.dto';
import { UpdateOrdonanceDto } from './dto/update-ordonance.dto';

@Controller('ordonance')
export class OrdonanceController {
  constructor(private readonly ordonanceService: OrdonanceService) {}

  @Post()
  create(@Body() createOrdonanceDto: CreateOrdonanceDto) {
    return this.ordonanceService.create(createOrdonanceDto);
  }

  @Get()
  findAll() {
    return this.ordonanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordonanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdonanceDto: UpdateOrdonanceDto) {
    return this.ordonanceService.update(+id, updateOrdonanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordonanceService.remove(+id);
  }
}
