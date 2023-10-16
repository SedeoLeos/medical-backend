import { Test, TestingModule } from '@nestjs/testing';
import { ChirugieController } from './chirugie.controller';
import { ChirugieService } from './chirugie.service';

describe('ChirugieController', () => {
  let controller: ChirugieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChirugieController],
      providers: [ChirugieService],
    }).compile();

    controller = module.get<ChirugieController>(ChirugieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
