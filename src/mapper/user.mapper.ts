import { UserDto } from "../domain.types/user.domain.types";

export class UserMapper{
    static toDto = (record : any ):UserDto =>{
        if(record === null){
            return null;
        }
        const dto: UserDto={
            name:record.name,
            email:record.email,
          
            
            

        }
        return dto;
    }
    static toArrayDto(record:any[]): UserDto[]{
        if(record=== null){
            return null;
        }
        const dtos:UserDto[]=[];
        record.forEach((element)=>{
            dtos.push({
                user_id:element.user_id,
                name : element.name,
                email:element.email,
                
                
                
            })
        })
        return dtos;
    }
}