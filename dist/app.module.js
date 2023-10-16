"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const common_module_1 = require("./common/common.module");
const nestjs_i18n_1 = require("nestjs-i18n");
const hospitalisation_module_1 = require("./api/hospitalisation/hospitalisation.module");
const salle_module_1 = require("./api/salle/salle.module");
const service_module_1 = require("./api/service/service.module");
const consultation_module_1 = require("./api/consultation/consultation.module");
const chirugie_module_1 = require("./api/chirugie/chirugie.module");
const examen_module_1 = require("./api/examen/examen.module");
const ordonance_module_1 = require("./api/ordonance/ordonance.module");
const facture_module_1 = require("./api/facture/facture.module");
const medicament_module_1 = require("./api/medicament/medicament.module");
const etablissement_module_1 = require("./api/etablissement/etablissement.module");
const planning_module_1 = require("./api/planning/planning.module");
const path = require("path");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'database.sqlite',
                autoLoadEntities: true,
                synchronize: true,
            }),
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: 'fr',
                loaderOptions: {
                    path: path.join(__dirname, '/i18n/'),
                    watch: true,
                },
                resolvers: [
                    { use: nestjs_i18n_1.QueryResolver, options: ['lang'] },
                    nestjs_i18n_1.AcceptLanguageResolver,
                ],
                typesOutputPath: path.join(__dirname, '../src/generated/i18n.generated.ts'),
            }),
            common_module_1.CommonModule,
            hospitalisation_module_1.HospitalisationModule,
            salle_module_1.SalleModule,
            service_module_1.ServiceModule,
            consultation_module_1.ConsultationModule,
            chirugie_module_1.ChirugieModule,
            examen_module_1.ExamenModule,
            ordonance_module_1.OrdonanceModule,
            facture_module_1.FactureModule,
            medicament_module_1.MedicamentModule,
            etablissement_module_1.EtablissementModule,
            planning_module_1.PlanningModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map