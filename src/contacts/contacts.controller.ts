import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() contact): any {
    return this.contactsService.create(contact);
  }

  @Get()
  findAll(): any {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findById(@Body() id): any {
    return this.contactsService.findById(id);
  }

  @Put(':id')
  update(@Body() id, @Body() contact): any {
    return this.contactsService.update(id, contact);
  }

  @Delete(':id')
  remove(@Param('id') id: number): any {
    this.contactsService.remove(id);
    return { message: 'Contact deleted successfully' };
  }
}
