import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdsModule } from './ads/ads.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, AuthModule, AdsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/productApp', { useNewUrlParser: true, useCreateIndex: true }),
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
