import { Component, Input } from '@angular/core';
import { Contact } from '../classSetups';
@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() contact!: Contact;
  @Input() darkMode!: boolean;


}
