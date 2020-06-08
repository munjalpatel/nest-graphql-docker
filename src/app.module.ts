import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterModule } from './twitter/twitter.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TwitterModule,
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
      autoSchemaFile: 'schema.gql',
      include: [TwitterModule],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
