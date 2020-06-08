import { Resolver, Args, Query } from '@nestjs/graphql';
import { TwitterData } from './twitter.model';

@Resolver(() => TwitterData)
export class TwitterResolver {
  @Query(() => TwitterData)
  async twitterData(@Args('searchTerm') searchTerm: string) {
    return { searchTerm, totalTweets: 1000 };
  }
}
