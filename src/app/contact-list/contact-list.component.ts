import { Component, Input, OnInit } from '@angular/core';
import { Contacts } from '../class/contacts';
import { ContactsService } from '../services/contacts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
imgcontact:string="../assets/images/phone.png";
imgthrash:string="../assets/images/thrash.png";
  @Input()
   contact!: Contacts;
  constructor(private contactService:ContactsService) { }

  ngOnInit() {
  }
 removeContacts():void{


    this.contactService.removecontacts(this.contact.id);
  


 
 
}
alertmsg(){
Swal.fire({
  title:'Are you sure?',
  text:'You will not be able to recover',
  icon:'warning',
  showCancelButton:true,
  confirmButtonText:'Yes, delete it!',
  confirmButtonColor:'#1976d2',
  cancelButtonText:'No, Keep it '
}).then(result =>{
  if(result.value){
    this.removeContacts();
    Swal.fire({
      title:'Contact Deleted!',
    icon:'success',
  confirmButtonColor:'#1976d2'})

  }
});
}
}


