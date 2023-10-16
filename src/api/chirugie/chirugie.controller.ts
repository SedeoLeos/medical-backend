import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChirugieService } from './chirugie.service';
import { CreateChirugieDto } from './dto/create-chirugie.dto';
import { UpdateChirugieDto } from './dto/update-chirugie.dto';

@Controller('chirugie')
export class ChirugieController {
  constructor(private readonly chirugieService: ChirugieService) {}

  @Post()
  create(@Body() createChirugieDto: CreateChirugieDto) {
    return this.chirugieService.create(createChirugieDto);
  }

  @Get()
  findAll() {
    return this.chirugieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chirugieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChirugieDto: UpdateChirugieDto) {
    return this.chirugieService.update(+id, updateChirugieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chirugieService.remove(+id);
  }
}
