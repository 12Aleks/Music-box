import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";
import {CreateCommentDto} from "./dto/create-comment.dto";


@Controller('/tracks')
export class TrackController{
    constructor(private tracksService: TrackService){}
    @Post()
    create(@Body() dto: CreateTrackDto){
        return this.tracksService.create(dto)
    }
    @Get()
    getAll(){
      return this.tracksService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId){
     return this.tracksService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.tracksService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: ObjectId, @Body() dto: CreateTrackDto){
        return this.tracksService.updateOne(id, dto)
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto){
        return this.tracksService.addComment(dto);
    }
}