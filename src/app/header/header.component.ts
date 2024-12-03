import { Component, Input } from '@angular/core';
import { Header, Contact } from '.././classSetups';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    constructor(private http: HttpClient) { }
  

  
  @Input() header!: Header;
  @Input() darkMode!: boolean;
  @Input() contact !: Contact;

  


    
    // TODO: Implement dark mode toggle functionality
  }
  

