import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";


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
}