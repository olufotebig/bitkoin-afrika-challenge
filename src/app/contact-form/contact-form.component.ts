import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  model: Contact;
  submitted: boolean;

  constructor(private contactService: ContactService) {
    this.model = new Contact('', '', '', '');
    this.submitted = false;
  }

  ngOnInit() {
  }

  onSubmit() { 
    this.contactService.save(this.model, function(){
      alert("Contact form saved");
    }); 
  }

  isValid() {
    return !this.emailsMatch(); // && other checks
  }

  emailsMatch() {
    if (typeof (this.model["email"]) !== "undefined") {
      return (this.model["email"] !== '') && this.model["email"] === this.model["confirmemail"];
    }
    return false;
  }

}
