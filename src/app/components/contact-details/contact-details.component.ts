import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent {
  @Input() contact: Contact;
  @Output() deletedContact = new EventEmitter<number>();

  deleteContact(): void {
    this.deletedContact.emit(this.contact?.id);
  }
}
