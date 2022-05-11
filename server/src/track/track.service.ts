import {Injectable} from "@nestjs/common";
import {Track, TrackDocument} from "./schemas/track.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Comment, CommentDocument} from "./schemas/comment.schema";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileService} from "../files/file.service";


@Injectable()

export class TrackService{
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
                private fileService: FileService
                ){}

    //esli async function dobawlajem Promise<>
    async create( dto: CreateTrackDto, picture, audio): Promise<Track> {
      const track = await this.trackModel.create({
          ...dto,
          picture: '',
          audio: ''
      });
        return track;
    }


    async getAll(){
       const tracks = await this.trackModel.find();
       return tracks;
    }

    async getOneTrack(id: ObjectId): Promise<Track>{
        const track = await this.trackModel.findById(id).populate('comments');
        return track;
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track._id
    }

    async updateOne(id: ObjectId, dto: CreateTrackDto): Promise<Track> {
        await this.trackModel.updateOne({_id: id}, {$set: {...dto}});
        const track = await this.getOneTrack(id);
        return track
    }

    async addComment(dto: CreateCommentDto): Promise<Comment>{
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({...dto});
        track.comments.push(comment._id);
        await track.save();
        return comment;
    }

}