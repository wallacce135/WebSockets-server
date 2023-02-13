import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Database, DatabaseDocument } from "./database.schema";
import { Model } from "mongoose";


@Injectable()
export class DatabaseService {

    constructor(@InjectModel(Database.name) private databaseModel: Model<DatabaseDocument>) { }

    async createNew(content: Database): Promise<Database> {
        const newData = new this.databaseModel({ ...content });
        return newData.save();
    }


    async getAllData(): Promise<Database[]> {
        return this.databaseModel.find()
    }
}