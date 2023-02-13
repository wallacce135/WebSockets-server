import { Module } from "@nestjs/common";
import { EventsGateway } from "./events.gateway";
import { DatabaseService } from "src/Mongoose/database.service";
import { DatabaseModule } from "src/Mongoose/database.module";
import { MongooseModule } from "@nestjs/mongoose";
import { Database, DatabaseSchema } from "src/Mongoose/database.schema";


@Module({
    imports: [DatabaseModule, MongooseModule.forFeature([{name: Database.name, schema: DatabaseSchema}])],
    controllers: [],
    providers: [EventsGateway, DatabaseService]
})

export class EventsModule { }