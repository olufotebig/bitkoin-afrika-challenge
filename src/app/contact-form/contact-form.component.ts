import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  model:Contact;
  
  constructor() { 
    this.model = new Contact('', '', '', '');
  }

  ngOnInit() {
  }

}
