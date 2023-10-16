import { Module } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { ConsultationController } from './consultation.controller';

@Module({
  controllers: [ConsultationController],
  providers: [ConsultationService]
})
export class ConsultationModule {}
