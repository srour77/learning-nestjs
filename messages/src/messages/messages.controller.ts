import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { readFile, readFileSync, writeFileSync } from 'fs';
import { postMessagaDTO } from 'src/dtos/postMessage.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    getMessages() {
        const messages = JSON.parse(readFileSync('../../messages.json', 'utf-8'));
        return messages;
    }

    @Get()
    getMessageById(@Param('id') id: string) {
        const messages = JSON.parse(readFileSync('../../messages.json', 'utf-8'));
        return messages[id];
    }

    @Post()
    createMessage(@Body() body: postMessagaDTO) {
        const messages = JSON.parse(readFileSync('messages.json', 'utf-8'));
        const id = 1 + Math.floor(Math.random() * 999);
        messages[id] = { id, ...body };
        writeFileSync('messages.json', messages);
        return 'created';
    }
}
