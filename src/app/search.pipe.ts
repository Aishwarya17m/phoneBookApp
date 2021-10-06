import { Pipe, PipeTransform } from '@angular/core';
import { Contacts } from './class/contacts';
import { ContactsService } from './services/contacts.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
constructor(public contactService:ContactsService){}
  transform(contacts:Contacts[],lastname:string): Contacts[] {
    if(!contacts || !lastname){
      return contacts;
    }
    return contacts.filter(con=>
      con.lastname.toLocaleLowerCase(). includes(lastname.toLocaleLowerCase()));
  }

}
