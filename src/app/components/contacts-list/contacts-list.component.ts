import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent {
  @Input() contacts: Contact[] = [];
  @Input() refreshResults = false;
  @Output() selectedContact = new EventEmitter<Contact>();
  @Output() newContactAdded = new EventEmitter<Contact>();

  showForm = false;
  showEdit = false;
  newContact: Contact = { nombre: '', titulo: 'Sr', email: '', numero: '' };
  emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  filteredContacts: Contact[] = [];

  selectContact(contact: Contact): void {
    this.selectedContact.emit(contact);
  }

  addContact(myForm: NgForm): void {
    const contact = {...this.newContact};
    myForm.reset();
    this.newContactAdded.emit(contact);
    this.refreshResults = false;
    this.showEdit = false;
    this.showForm = false;
  }

  onQuery(contacts: Contact[]): void {
    if(contacts === this.contacts) {
      this.filteredContacts = [];
    } else { 
      this.filteredContacts = contacts;
    }
  }

  toggleEdit(contact: Contact): void {
    this.showEdit = !this.showEdit;
    if(!this.showEdit) {
      this.newContact = { nombre: '', titulo: 'Sr', email: '', numero: '' };
    }else{
      this.newContact = contact;
    }
  }
}
