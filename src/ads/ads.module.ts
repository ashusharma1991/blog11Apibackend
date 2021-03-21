import { Module } from '@nestjs/common';
import { AdsService } from './ads.service';
import { AdsController } from './ads.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AddSchema } from './add.schema';
import { ImageController } from './image.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Add', schema: AddSchema }])],
  providers: [AdsService],
  controllers: [AdsController]
})
export class AdsModule {}
