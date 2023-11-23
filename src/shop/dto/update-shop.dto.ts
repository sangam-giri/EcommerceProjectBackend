import { IsOptional,IsString} from "class-validator";



export class UpdateShopDto{
    

@IsOptional()
@IsString()
readonly shopName:string;
@IsOptional()
@IsString()
readonly shopLocation:string;

}
