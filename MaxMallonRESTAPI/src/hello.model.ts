import {ApiModelProperty} from '@nestjs/swagger'
import { Score } from 'score.model';

export class Hello{
    @ApiModelProperty({
        example: "World",
        description: "test"
    })
    
    readonly world : string;
    readonly score : Score;
    constructor(w : string, s : Score){
        this.world = w;
        this.score = s;
    }
}