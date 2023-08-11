import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get('/')
  listMessages() {
    return 'list messages';
  }

  @Post('/')
  createMessages(@Body() body: CreateMessageDto) {
    return body.content;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }
}
