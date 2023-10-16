import { Module } from '@nestjs/common';
import { MedicamentService } from './medicament.service';
import { MedicamentController } from './medicament.controller';

@Module({
  controllers: [MedicamentController],
  providers: [MedicamentService]
})
export class MedicamentModule {}
