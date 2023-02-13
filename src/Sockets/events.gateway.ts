import { InjectModel } from '@nestjs/mongoose';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Model } from 'mongoose';
import { Database, DatabaseDocument } from 'src/Mongoose/database.schema';
import { OnModuleInit } from '@nestjs/common';

@WebSocketGateway(
  {
    cors: {
      origin: ['http://localhost:3000']
    }
  })
export class EventsGateway implements OnModuleInit {

  constructor(@InjectModel(Database.name) private databaseModel: Model<DatabaseDocument>) { }

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(`Connected: ${socket.id}`);
    } )  
  }

  @WebSocketServer()
  server: Server

  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: any): void {
    console.log(body);
    this.server.emit('onMessage', {
      msg: "new Message", 
      content: body
    })
  }

  @SubscribeMessage('ReqFullData')
  async sendData() {
    const allData = await this.databaseModel.find()
    this.server.emit('ResFullData', allData);
  }


  @SubscribeMessage('ReqAddingData')
  async addData(@MessageBody() data: Database) {

    console.log(data)

    if (data) {
      await this.databaseModel.create({ ...data });
      const allData = await this.databaseModel.find();
      this.server.emit('ResFullData', allData);
    }

  }

}