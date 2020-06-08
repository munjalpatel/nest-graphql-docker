import { Test, TestingModule } from '@nestjs/testing';
import { TwitterResolver } from './twitter.resolver';

describe('TwitterResolver', () => {
  let resolver: TwitterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwitterResolver],
    }).compile();

    resolver = module.get<TwitterResolver>(TwitterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
