import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";



@Schema({
    collection:"product",
    timestamps:true
})export class Product{
    





@Prop()
productName: string


@Prop()
productPrice: number


@Prop()
productDesc: string


@Prop()
productImages: any[]

}
export const ProductSchema = SchemaFactory.createForClass(Product);
