import { Module } from "@nestjs/common";
import { DatabaseController } from "./database.controller";
import { DatabaseService } from "./database.service";
import { MongooseModule } from "@nestjs/mongoose";
import {Database, DatabaseDocument, DatabaseSchema} from './database.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Database.name, schema: DatabaseSchema}])],
    controllers: [DatabaseController],
    providers: [DatabaseService]
})

export class DatabaseModule {}


