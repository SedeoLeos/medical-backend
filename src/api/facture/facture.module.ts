import { Module } from '@nestjs/common';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';

@Module({
  controllers: [FactureController],
  providers: [FactureService]
})
export class FactureModule {}
