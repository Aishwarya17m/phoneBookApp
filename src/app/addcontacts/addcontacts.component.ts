import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from '../services/contacts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.css']
})
export class AddcontactsComponent implements OnInit {
  mobpattern="^((\\+91-?)|0)?[0-9]{10}$";
  firstname:string;
  lastname:string;
   contact:string;
  constructor(private contactService:ContactsService,private dialog:MatDialog) {
    this.firstname='';
 this.lastname='';
 this.contact='';
   }
   
  

  ngOnInit(): void {
  }
addContacts(){
this.contactService.addContacts(this.firstname,this.lastname,this.contact)
this.firstname='';
this.lastname='';
this.contact='';
Swal.fire({
  title:"Contact added",
  icon:'success',
confirmButtonColor:'#1976d2'});
this.close();
}
close(){
  this.dialog.closeAll();
}

}
