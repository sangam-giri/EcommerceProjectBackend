import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ShopSchema } from './schema/shop.schema';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
//This is where we have imported 


@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'Shop',schema:ShopSchema}]),
  //Place all your imports here
   
  ],
  controllers: [ShopController],
  providers: [ShopService,]
})
export class ShopModule {}
