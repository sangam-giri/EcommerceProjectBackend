import { IsOptional,IsString,IsNumber,IsArray} from "class-validator";



export class UpdateProductDto{
    



@IsOptional()
@IsString()
readonly productName:string;
@IsOptional()
@IsNumber()
readonly productPrice:number;
@IsOptional()
@IsString()
readonly productDesc:string;
@IsOptional()
@IsArray()
readonly productImages:any[];

}
