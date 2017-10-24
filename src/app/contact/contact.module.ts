import { NgModule }       from '@angular/core';
 
import { ContactComponent }  from './contact.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

import { ContactRoutingModule } from './contact-routing.module';

  
@NgModule({
  imports: [
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    ContactFormComponent
  ],
  providers: [  ]
})
export class ContactModule {}