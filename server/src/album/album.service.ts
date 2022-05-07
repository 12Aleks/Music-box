import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Album, AlbumDocument} from "./services/album.schema";
import {Model} from "mongoose";
import {CreateAlbumDto} from "./dto/create-album.dto";

@Injectable()
export class AlbumService{
    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>){}
    async create(dto: CreateAlbumDto){
        const album = await this.albumModel.create({...dto});
        return album
    }

    async getAll(){

    }

    async getOne(){

    }

    async delete(){

    }
}