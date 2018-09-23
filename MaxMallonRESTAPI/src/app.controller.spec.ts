import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ScoreController } from './score.controller';
import { UserController } from './user.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController, ScoreController, UserController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.root("")).toBe('Hello World!');
    });
  });
});
