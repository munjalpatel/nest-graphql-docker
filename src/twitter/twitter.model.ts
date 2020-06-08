import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TwitterData {
  searchTerm: string;
  primaryInfo: number;
}
