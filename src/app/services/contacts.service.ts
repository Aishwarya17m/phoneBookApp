import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {Contacts} from '../class/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
   //contacts:Contacts[];
private nextid:number=0;
  constructor() { 
   
    let contacts=this.getcontacts();

    if(contacts.length==0){
      this.nextid=0;
    
    }
    else{
      let maxid=contacts[contacts.length-1].id;
      this.nextid=maxid+1;
      contacts.sort(
        (a,b)=>a.id>b.id ? 1:-1)
        this.setlocalStorageContacts(contacts);
    }
    
    
  }
  public addContacts(firstname:string,lastname:string,cont:string):void{
   
    let contact=new Contacts(this.nextid,firstname,lastname,cont);
 let contacts=this.getcontacts();
   contacts.push(contact);
   this.setlocalStorageContacts(contacts);
    this.nextid++;
     
  }


 
  public getcontacts():Contacts[]{
    let localStorageItem=JSON.parse(localStorage.getItem('contacts')||'{}');
   
  
    return localStorageItem==null?[]:localStorageItem.contacts;
    
    
    
  }

  public removecontacts(id:number):void{
let contacts=this.getcontacts();
    contacts=contacts.filter((contact)=>contact.id!=id);
    this.setlocalStorageContacts(contacts);
  }
  private setlocalStorageContacts(contacts:Contacts[]):void{
    localStorage.setItem('contacts',JSON.stringify({contacts:contacts}));
  }
 public sortasc(){
  let contacts=this.getcontacts();
  contacts.sort(
    (a,b)=>a.firstname.toLocaleLowerCase()>b.firstname.toLocaleLowerCase() ? 1:-1)
    this.setlocalStorageContacts(contacts);
  

  
 }
 public sortdesc(){
  let contacts=this.getcontacts();
  contacts.sort(
    (a,b)=>a.firstname.toLocaleLowerCase()<b.firstname.toLocaleLowerCase() ? 1:-1)
    this.setlocalStorageContacts(contacts);
  

  
 }
  
}
