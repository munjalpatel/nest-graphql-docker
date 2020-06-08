import { Module } from '@nestjs/common';
import { TwitterResolver } from './twitter.resolver';

@Module({
  providers: [TwitterResolver]
})
export class TwitterModule {}
