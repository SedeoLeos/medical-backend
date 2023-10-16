import { Module } from '@nestjs/common';
import { ChirugieService } from './chirugie.service';
import { ChirugieController } from './chirugie.controller';

@Module({
  controllers: [ChirugieController],
  providers: [ChirugieService]
})
export class ChirugieModule {}
