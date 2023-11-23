import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";



@Schema({
    collection:"shop",
    timestamps:true
})export class Shop{
    



@Prop()
shopName: string


@Prop()
shopLocation: string

}
export const ShopSchema = SchemaFactory.createForClass(Shop);
