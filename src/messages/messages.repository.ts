import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  private async readMessages() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async findOne(id: string) {
    const messages = await this.readMessages();
    return messages[id];
  }

  async findAll() {
    const messages = await this.readMessages();
    return messages;
  }

  async create(content: string) {
    const messages = await this.readMessages();
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));

    return messages[id];
  }
}
