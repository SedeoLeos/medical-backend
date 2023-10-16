import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import { HospitalisationModule } from './api/hospitalisation/hospitalisation.module';
import { SalleModule } from './api/salle/salle.module';
import { ServiceModule } from './api/service/service.module';
import { ConsultationModule } from './api/consultation/consultation.module';
import { ChirugieModule } from './api/chirugie/chirugie.module';
import { ExamenModule } from './api/examen/examen.module';
import { OrdonanceModule } from './api/ordonance/ordonance.module';
import { FactureModule } from './api/facture/facture.module';
import { MedicamentModule } from './api/medicament/medicament.module';
import { EtablissementModule } from './api/etablissement/etablissement.module';
import { PlanningModule } from './api/planning/planning.module';
import * as path from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'fr',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
      typesOutputPath: path.join(__dirname, '../src/generated/i18n.generated.ts'),
    }),
    CommonModule,
    HospitalisationModule,
    SalleModule,
    ServiceModule,
    ConsultationModule,
    ChirugieModule,
    ExamenModule,
    OrdonanceModule,
    FactureModule,
    MedicamentModule,
    EtablissementModule,
    PlanningModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
