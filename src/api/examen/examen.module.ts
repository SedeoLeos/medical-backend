import { Module } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { ExamenController } from './examen.controller';

@Module({
  controllers: [ExamenController],
  providers: [ExamenService]
})
export class ExamenModule {}
