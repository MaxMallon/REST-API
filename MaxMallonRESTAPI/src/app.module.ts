import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScoreController } from './score.controller';
import { AppService } from './app.service';
import { UserController } from 'user.controller';

@Module({
  imports: [],
  controllers: [AppController, ScoreController, UserController],
  providers: [AppService],
})
export class AppModule {}
