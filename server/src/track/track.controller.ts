import {Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";


@Controller('/tracks')
export class TrackController{
    constructor(private tracksService: TrackService){}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto){
        console.log('controller', dto, files )
        const {picture, audio} = files;
        return this.tracksService.create(dto, picture[0], audio[0] )
    }

    @Get()
    getAll(@Query('count') count: number, @Query('offset') offset: number){
      return this.tracksService.getAll(count, offset)
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId){
     return this.tracksService.getOneTrack(id)
    }

    @Get('/search/info')
    search(@Query('query') query: string) {
       return this.tracksService.search(query)
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

    @Post('/listen/:id')
    listen(@Param('id')id: ObjectId){
        return this.tracksService.listen(id)
    }


}