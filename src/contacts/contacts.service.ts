import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
  ) {}

  async createcontact(
    name: string,
    email: string,
    phone: string,
  ): Promise<Contact> {
    const contact = this.contactsRepository.create({ name, email, phone });
    return this.contactsRepository.save(contact);
  }

  async findAll(): Promise<Contact[]> {
    return this.contactsRepository.find();
  }

  async findById(id: number): Promise<Contact> {
    return this.contactsRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.contactsRepository.delete(id);
  }
}
