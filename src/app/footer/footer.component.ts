import { Component, Input } from '@angular/core';
import { Footer } from '../classSetups';
@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() darkMode!: boolean;
  @Input() footer !: Footer;

}
