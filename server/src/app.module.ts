import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import {TrackModule} from "./track/track.module";

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

@Module({
   imports: [
       MongooseModule.forRoot(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.3pevb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`),
       TrackModule
   ]
})
export class AppModule{}