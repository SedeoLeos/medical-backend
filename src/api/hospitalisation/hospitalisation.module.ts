import { Module } from '@nestjs/common';
import { HospitalisationService } from './hospitalisation.service';
import { HospitalisationController } from './hospitalisation.controller';

@Module({
  controllers: [HospitalisationController],
  providers: [HospitalisationService]
})
export class HospitalisationModule {}
