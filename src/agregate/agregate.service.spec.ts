import { Test, TestingModule } from '@nestjs/testing';
import { AgregateService } from './agregate.service';

describe('AgregateService', () => {
  let service: AgregateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgregateService],
    }).compile();

    service = module.get<AgregateService>(AgregateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
