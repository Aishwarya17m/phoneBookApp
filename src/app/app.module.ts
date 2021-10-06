import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsService} from './services/contacts.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchPipe } from './search.pipe';


@NgModule({
  
  declarations: [
    AppComponent,
    ContactListComponent,
    AddcontactsComponent,
    SearchPipe
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
