import { Injectable } from '@angular/core';
import { Contact } from '../contact-form/contact';
@Injectable()
export class ContactService {
  contact: Contact
  constructor() {
  }

  save(contact: Contact, cb){
    localStorage.setItem('contact', JSON.stringify(contact));
    cb();
  }

}
