import { Injectable } from '@nestjs/common';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable()
export class ContactsService {
  private contacts: Contact[] = [];

  create(contact: Contact): Contact {
    this.contacts.push(contact);
    return contact;
  }

  findAll(): Contact[] {
    return this.contacts;
  }

  findById(id: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }

  update(id: number, contact: Contact): Contact {
    const index = this.contacts.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.contacts[index] = contact;
      return this.contacts[index];
    }
  }

  remove(id: number): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }
}
