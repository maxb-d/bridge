import { Test, TestingModule } from '@nestjs/testing';
import { AgregateController } from './agregate.controller';
import { AgregateService } from './agregate.service';

describe('AgregateController', () => {
  let controller: AgregateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgregateController],
      providers: [AgregateService],
    }).compile();

    controller = module.get<AgregateController>(AgregateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
