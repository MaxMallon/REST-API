import {ApiModelProperty} from '@nestjs/swagger'

export class User{
    @ApiModelProperty({
        status: "ok",
        name: "Ernst",
        id: 1
    })
    
    readonly status : string;
    readonly name : string;
    readonly id : number;
    constructor(status: string, name : string, id : number){
        this.status = status;
        this.name = name;
        this.id = id;
    }
}