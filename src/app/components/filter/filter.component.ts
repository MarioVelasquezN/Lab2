import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() contacts: Contact[] = [];
  query: {value: string, filterBy: 'Nombre' | 'Numero' | 'Email' | ''} = {value: '', filterBy: '' };
  @Output() onQuery = new EventEmitter<Contact[]>();
  
  search(): void {

    let filteredContacts: Contact[] = [];

    if(this.query.value === ''){
      this.onQuery.emit(this.contacts);
      return; 
    }

    switch(this.query.filterBy){
      case '':
        filteredContacts = this.contacts.filter(contact => contact.nombre.toLowerCase().includes(this.query.value.toLowerCase()));
        break;
      case 'Nombre':
        filteredContacts = this.contacts.filter(contact => contact.nombre.toLowerCase().includes(this.query.value.toLowerCase()));
      break;
      case 'Numero':
        filteredContacts = this.contacts.filter(contact => contact.numero.toLowerCase().includes(this.query.value.toLowerCase()));
      break;
      case 'Email':
        filteredContacts = this.contacts.filter(contact => contact.email.includes(this.query.value.toLowerCase()));
      break;
    }

    this.onQuery.emit(filteredContacts);
  }
}
