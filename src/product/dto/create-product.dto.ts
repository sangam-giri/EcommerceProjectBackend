import {IsNotEmpty,IsString,IsNumber,IsArray} from "class-validator";

export class CreateProductDto{

@IsNotEmpty()
@IsString()
readonly productName:string;
@IsNotEmpty()
@IsNumber()
readonly productPrice:number;
@IsNotEmpty()
@IsString()
readonly productDesc:string;
@IsNotEmpty()
@IsArray()
readonly productImages:any[];

}
