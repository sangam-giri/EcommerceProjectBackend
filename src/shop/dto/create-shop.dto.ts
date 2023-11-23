import {IsNotEmpty,IsString} from "class-validator";



export class CreateShopDto{
    

@IsNotEmpty()
@IsString()
readonly shopName:string;
@IsNotEmpty()
@IsString()
readonly shopLocation:string;

}
