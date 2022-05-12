import {Injectable} from "@nestjs/common";
import {Track, TrackDocument} from "./schemas/track.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Comment, CommentDocument} from "./schemas/comment.schema";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileService, FileType} from "../files/file.service";


@Injectable()

export class TrackService{
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
                private fileService: FileService
                ){}

    //esli async function dobawlajem Promise<>
    async create( dto: CreateTrackDto, picture, audio): Promise<Track> {
      const audioPath = await this.fileService.createFile(FileType.AUDIO, audio);
      const picturePath = await this.fileService.createFile(FileType.IMAGE, picture);

      const track = await this.trackModel.create({
          ...dto,
          listens: 0,
          picture: picturePath,
          audio: audioPath
      });
        return track;
    }


    async getAll(count:number = 10, offset: number = 0){
        //skip() - otstup //limit() - koliczestwo
       const tracks = await this.trackModel.find().skip(offset).limit(count);
       return tracks;
    }

    async getOneTrack(id: ObjectId): Promise<Track>{
        const track = await this.trackModel.findById(id).populate('comments');
        return track;
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track._id;
    }

    async updateOne(id: ObjectId, dto: CreateTrackDto): Promise<Track> {
        await this.trackModel.updateOne({_id: id}, {$set: {...dto}});
        const track = await this.getOneTrack(id);
        return track;
    }

    async addComment(dto: CreateCommentDto): Promise<Comment>{
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({...dto});
        track.comments.push(comment._id);
        await track.save();
        return comment;
    }


    async search(query: string): Promise<Track[]> {
        const tracks = await this.trackModel.find({
            name: {$regex: new RegExp(query, 'i')}
        })
        return tracks;
    }


    async listen(id: ObjectId){
       const track = await this.trackModel.findById(id);
       track.listens += 1;
       await track.save()
    }


}