import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Header, Contact} from './classSetups';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent {
  title = 'portfolio';
  constructor (private http: HttpClient) { }

  url !: string;
  jsonData !: any;
  headerContent !: Header;
  contactContent !: Contact;

  darkMode = true;

  loadContent() {
    this.url = "data/content.json";
    this.http.get(this.url).subscribe((data) => {
      this.jsonData = data;
      this.headerContent = this.jsonData.header;
      this.contactContent = this.jsonData.contact;
    });

  }

  loadProjects() {

  }

  ngOnInit(): void {
    this.loadContent()
  }
  
}
