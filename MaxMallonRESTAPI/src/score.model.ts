import {ApiModelProperty} from '@nestjs/swagger'

export class Score{
    @ApiModelProperty({
        status: "ok",
        id: 1,
        score: 1
    })
    
    readonly status: string
    readonly id : number;
    readonly score : number;
    constructor(status: string, id : number, score : number){
        this.status = status;
        this.id = id;
        this.score = score;
    }
}