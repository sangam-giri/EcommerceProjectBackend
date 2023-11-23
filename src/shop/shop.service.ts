import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import {Shop} from './schema/shop.schema';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

@Injectable()
export class ShopService {
    constructor(
        @InjectModel(Shop.name)
        private shopModel: mongoose.Model<Shop>
    ) {}

  async findAll(query: Query): Promise<Shop[]> {
  const resPerPage = 10
        const currentPage = Number(query.page) || 1
        const skip = resPerPage * (currentPage - 1)

        const keyword = query.keyword ? {
            title: {
                regex: query.keyword,
                options: 'i'
            }
        } : {}
const shop = await    this.shopModel.find();
        

        return shop;
    }

    
  async create(shop: CreateShopDto,): Promise<string> {
const  res = await  this.shopModel.create(shop);
        return "Successfully added !";
    }

    

  async findById(id: string): Promise<Shop> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new NotFoundException('Please enter correct id');
        }
        const shop = await this.shopModel.findById(id);

        if (!shop) {
            throw new NotFoundException('Not found !');
        }
        return shop;
    }

      async search(keyword:string):Promise<any>{
    const results = await this.shopModel.find({
        $or:[{shopName: { $regex: keyword, $options: 'i' } },
{shopLocation: { $regex: keyword, $options: 'i' } },
		]
      });
      return results;
    }

  async updateById(id: string, shop: UpdateShopDto): Promise<Shop> {
        return await this.shopModel.findByIdAndUpdate(id, shop, {
            new: true,
            runValidators: true
        });
    }

  async deleteById(id: string): Promise<Shop> {
        return await this.shopModel.findByIdAndDelete(id);
    }
}
