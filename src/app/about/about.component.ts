import { Component, Input } from '@angular/core';
import { About } from '../classSetups';
@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() about!: About;
  @Input() darkMode!: boolean;




}
