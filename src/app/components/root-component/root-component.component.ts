import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css'],
})
export class RootComponent {
  contacts: Contact[] = [
    {
      id: 0,
      nombre: 'Mario',
      email: 'mario@email.com',
      numero: '+504 96742099',
      titulo: 'Sr',
    },
    {
      id: 1,
      nombre: 'Rolando',
      email: 'rolando@email.com',
      numero: '+504 4321 3254',
      titulo: 'Sr',
    },
  ];

  selectedContact: Contact | undefined;
  resetResults = false;

  setSelectedContact(event: Contact): void {
    this.selectedContact = event;
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.selectedContact = undefined;
    this.resetResults = true;
  }

  addContact(contact: Contact): void {
    const newContact = {...contact}
    this.contacts.push(newContact);
  }
}
