import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import {TrackModule} from "./track/track.module";
import {AlbumModule} from "./album/album.module";
import {FileModule} from "./files/file.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

@Module({
   imports: [
       ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static')}),
       MongooseModule.forRoot(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.3pevb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`),
       TrackModule,
       AlbumModule,
       FileModule
   ]
})
export class AppModule{}