import { Body, Controller,Delete,Get,Param,Post, Put,Query,Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { ShopService } from './shop.service';
import { Shop } from './schema/shop.schema';
import { UpdateShopDto } from './dto/update-shop.dto';
import { CreateShopDto } from './dto/create-shop.dto';
import { SearchDto } from './dto/keyword-search.dto';
import { Roles } from 'src/auth/custom_decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('shop')
export class ShopController {
    constructor (private shopService:ShopService,){
    }

  @Get('all-shop')
    async getAllShop(@Query() query:ExpressQuery):Promise<Shop[]>{
        return this.shopService.findAll(query)
    }
   

  @Post('add-shop')
@UseGuards(AuthGuard(),RolesGuard)
@Roles('vendor')
async createShop(
        @Body()
        shop:CreateShopDto):Promise<string>{

    return this.shopService.create(shop,);
    }
    

  @Get(':id')
@UseGuards(AuthGuard(),RolesGuard)
@Roles('vendor','customer')
    async getShop(
        @Param('id') id:string
    ):Promise<Shop>{
        return this.shopService.findById(id);
    }

      @Get('search')
@UseGuards(AuthGuard(),RolesGuard)
@Roles('vendor','customer')
  async search(@Body() searchDto:SearchDto):Promise<any>{
       return await this.shopService.search(searchDto.keyword);
    }

     @Put(':id')
@UseGuards(AuthGuard(),RolesGuard)
@Roles('vendor')
    async updateShop(
        @Param('id')
        id:string,
        @Body()
         shop:UpdateShopDto):Promise<Shop>{
    return this.shopService.updateById(id,shop);
    }
   
     @Delete(':id')
     
@UseGuards(AuthGuard(),RolesGuard)
@Roles('vendor')
    async deleteShop(
        @Param('id') id:string
    ):Promise<Shop>{
        return this.shopService.deleteById(id);
    }
}
