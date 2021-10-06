import { Component, Input } from '@angular/core';
import { ContactsService } from './services/contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { Contacts } from './class/contacts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phoneBookApp';
  
  lastname:string='';
  
   @Input()
   contact!: Contacts;
  urlimg:string="../assets/images/book.png";

constructor(public contactService:ContactsService,private dialog:MatDialog){
  
  
}
openDialog(){
  this.dialog.open(AddcontactsComponent);
}
sortasc(){

  this.contactService.sortasc();
}
sortdesc(){

  this.contactService.sortdesc();
}



}
