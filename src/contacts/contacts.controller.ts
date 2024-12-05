import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() contact: Contact): Promise<Contact> {
    return this.contactsService.createcontact(
      contact.name,
      contact.email,
      contact.phone,
    );
  }

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Contact> {
    return this.contactsService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.contactsService.delete(id);
  }
}
