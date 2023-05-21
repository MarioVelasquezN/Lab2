import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';

@Injectable()
export class LocalStorageService {
  saveContact(contact: Contact): void {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      const contactsArray = contacts.split(',');
      contactsArray.push(JSON.stringify(contact));
      localStorage.setItem('contacts', contactsArray.join(','));
    } else {
      localStorage.setItem('contacts', JSON.stringify(contact));
    }
  }

  deleteContact(id: number): void {
    const contacts = localStorage.getItem('contacts');

    if (contacts) {
      const contactsArray = contacts
        .split(',')
        .map((contact) => JSON.parse(contact));

      const indexToBeDeleted = contactsArray.findIndex(
        (contact: Contact) => contact.id
      );

      contactsArray.splice(indexToBeDeleted);

      localStorage.setItem('contacts', JSON.stringify(contactsArray));
    }
  }
}