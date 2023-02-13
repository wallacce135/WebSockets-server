import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DatabaseDocument = Database & Document;

@Schema()
export class Database {

    @Prop()
    data: string;

    @Prop()
    date: number;
}

export const DatabaseSchema = SchemaFactory.createForClass(Database);