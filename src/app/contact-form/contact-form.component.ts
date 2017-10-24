import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  model: Contact;
  submitted: boolean;

  constructor() {
    this.model = new Contact('', '', '', '');
    this.submitted = false;
  }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

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
