import { Module } from '@nestjs/common';
import { OrdonanceService } from './ordonance.service';
import { OrdonanceController } from './ordonance.controller';

@Module({
  controllers: [OrdonanceController],
  providers: [OrdonanceService]
})
export class OrdonanceModule {}
