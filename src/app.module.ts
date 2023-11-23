import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'; 
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ShopModule } from './shop/shop.module';
import { FilesModule } from './file_upload/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    FilesModule,
    ProductModule,
		ShopModule,
    AuthModule
  ],
})
export class AppModule {}
