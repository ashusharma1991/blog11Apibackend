import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Add } from './add.interface';
import { AddDto } from '../ads/add.dto';

@Injectable()
export class AdsService {

    constructor(@InjectModel('Add') private readonly addModel: Model<Add>) { }

    async findAll(): Promise<Add[]> {
        return await this.addModel.find();
    }

    async findOne(id: string): Promise<Add> {
        return await this.addModel.findOne({ _id: id });
    }

    async create(adddto: AddDto): Promise<Add> {
        const newAdd = new this.addModel(adddto);
        return await newAdd.save();
    }

    async delete(id: string): Promise<any> {
        await this.addModel.findByIdAndRemove(id);
        //return await this.addModel.find();
    }

    async update(id: string, adddto: AddDto): Promise<Add> {
        return await this.addModel.findByIdAndUpdate(id, adddto, { new: true });
    }
    
}
