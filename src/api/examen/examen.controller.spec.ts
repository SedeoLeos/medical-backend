import { Test, TestingModule } from '@nestjs/testing';
import { ExamenController } from './examen.controller';
import { ExamenService } from './examen.service';

describe('ExamenController', () => {
  let controller: ExamenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamenController],
      providers: [ExamenService],
    }).compile();

    controller = module.get<ExamenController>(ExamenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
