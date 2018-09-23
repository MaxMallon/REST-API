import { Controller, Delete, Get, Param, Post, Body } from '@nestjs/common';
import { User } from 'user.model';


let userList: User[] = [];
let idcount: number = 0;


@Controller('user')
export class UserController {
  

  @Post()
  setUser( @Body() userName: User): User{
    userList.push(new User("ok", userName.name, idcount));
    idcount++;
    let returnUser: User = new User("succes", userName.name, idcount - 1);    
    return returnUser;
  }

  @Get(':user')
  getUser(@Param('user') id : number) : User{
    for (let i of userList){
      if (i.id == id){
        let returnUser: User = new User("succes", i.name, i.id);
        return returnUser;
      }
    }
    return new User("failure", "ERROR", 404);
  }

  @Delete(':user')
  deleteUser( @Param('user') id: number): string{
    let j: number = 0;
    for (let i of userList){
      if (i.id == id){
        userList.splice(j, 1);
        return "{\"status\": \"succes\"}";
      }
      j++;
    }
    return "{\"status\": \"Failure u succ\"}";
  }
}
