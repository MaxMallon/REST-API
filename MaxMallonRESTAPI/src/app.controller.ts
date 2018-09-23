import { Put, Post, Body, Controller, Get, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Hello } from 'hello.model';
import { Score } from 'score.model';
import { MyScore } from 'myscore.model';
import { User } from 'user.model';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


 

  

  @Get()
  findOne(@Param() params){
    //console.log(params.id);
    //console.log(scoreList[params.id]);
    return 'This action returns a #${params.id} score';
  }

  @Delete()
  root2(@Body() param: Score): Score{
    console.log(new Score(new User("aap", 1), 10));
    return new Score(new User("aap", 1), 69);
  }
  
}
