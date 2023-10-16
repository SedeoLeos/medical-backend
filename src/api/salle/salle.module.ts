import { Module } from '@nestjs/common';
import { SalleService } from './salle.service';
import { SalleController } from './salle.controller';

@Module({
  controllers: [SalleController],
  providers: [SalleService]
})
export class SalleModule {}
