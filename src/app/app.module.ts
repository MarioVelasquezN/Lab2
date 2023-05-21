import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocalStorageService } from './services/localStorage/local-storage.service';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { RootComponent } from './components/root-component/root-component.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    FilterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
