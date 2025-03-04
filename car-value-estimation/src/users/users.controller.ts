import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
export class UsersController {
    @Post('/new')
    signup(@Body() body: CreateUserDto) {
        console.log(body);
    }

    @Post('/login')
    login(@Body() body: CreateUserDto) {

    }

    @Get('/id/:id')
    getById(@Query() id: number) {

    }

    @Get('/email/:id')
    getByEmail(@Query() email: string) {

    }

    @Put('/update/:id')
    update(@Query() id: number) {

    }

    @Delete('/delete/:id')
    delete(@Query() id: number) {

    }
}
