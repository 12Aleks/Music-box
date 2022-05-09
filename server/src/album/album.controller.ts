import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {AlbumService} from "./album.service";
import {CreateAlbumDto} from "./dto/create-album.dto";
import {ObjectId} from "mongoose";


@Controller('/albums')
export class AlbumController {
    constructor(private albumService: AlbumService) {}
    @Post()
    create(@Body() dto: CreateAlbumDto) {
        return this.albumService.create(dto)
    }

    @Get()
    getAll() {
        return this.albumService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.albumService.getOne(id)
    }
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.albumService.delete(id)
    }

    @Put(':id')
    update(@Param('id') id: ObjectId, dto: CreateAlbumDto){
        return this.albumService.updateOne(id, dto)
    }
}