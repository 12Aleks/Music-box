import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Album, AlbumDocument} from "./services/album.schema";
import {Model, ObjectId} from "mongoose";
import {CreateAlbumDto} from "./dto/create-album.dto";

@Injectable()
export class AlbumService{
    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>){}
    async create(dto: CreateAlbumDto){
        const album = await this.albumModel.create({...dto});
        return album
    }

    async getAll(){
        const albums = await this.albumModel.find();
        return albums
    }

    async getOne(id: ObjectId): Promise<Album>{
       const album = await this.albumModel.findById(id).populate('track');
       return album;
    }

    async delete(id: ObjectId): Promise<ObjectId>{
       const album = await this.albumModel.findByIdAndDelete(id);
       return album._id;
    }

    async updateOne(id: ObjectId, dto: CreateAlbumDto): Promise<Album>{
        await this.albumModel.updateOne({_id: id}, {$set: {...dto}});
        const album = await this.getOne(id);
        return album;
    }
}