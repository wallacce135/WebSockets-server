import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './Mongoose/database.module';
import { EventsGateway } from './Sockets/events.gateway';
import { DatabaseService } from './Mongoose/database.service';
import { EventsModule } from './Sockets/events.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'), 
    DatabaseModule,
    EventsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
