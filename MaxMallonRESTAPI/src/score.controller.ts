import { Controller, Delete, Get, Param, Post, Body } from '@nestjs/common';
import { Score } from 'score.model';


let scoreList: Score[] = [];

@Controller('score')
export class ScoreController {

  @Post()
  setScore( @Body() score: Score): Score{
    let index = 0;
    for (let i of scoreList){
      if (i.id == score.id){
        if (i.score < score.score){
          scoreList[index] = score;
          let returnScore = new Score("succes", i.id, score.score);
          return returnScore;
        }
        else{
          return new Score("failure", i.id, i.score);
        }

      }  
      index++;    
    }
    scoreList.push(score);    
    let returnScore = new Score("succes", score.id, score.score);
    return returnScore;
  }

  @Get(':score')
  getScore(@Param('score') id : number) : Score{
    for (let i of scoreList){
      if (i.id == id){
        let returnScore = new Score("succes", i.id, i.score);
        return returnScore;
      }
    }
    return new Score("failure", 0, 0);
  }

  @Delete(':score')
  deleteScore(@Param('score') id: number, score: number): string{
    let j: number = 0;
    for (let i of scoreList){
      if (i.id== id && i.score == score){
        scoreList.splice(j, 1);
        return "{\"status\": \"succes\"}";
      }
      j++;
    }
    return "{\"status\": \"Failure u succ\"}";
  }
}
