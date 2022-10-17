import { Test, TestingModule } from '@nestjs/testing';
import { AtelierController } from './atelier.controller';

describe('AtelierController', () => {
  let controller: AtelierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtelierController],
    }).compile();

    controller = module.get<AtelierController>(AtelierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
