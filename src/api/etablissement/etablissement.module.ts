import { Module } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { EtablissementController } from './etablissement.controller';

@Module({
  controllers: [EtablissementController],
  providers: [EtablissementService]
})
export class EtablissementModule {}
