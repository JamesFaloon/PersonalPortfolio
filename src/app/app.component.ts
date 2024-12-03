import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Header, Contact, About, Footer } from './classSetups';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'portfolio';
  constructor(private http: HttpClient) { }

  url !: string;
  jsonData !: any;
  headerContent !: Header;
  aboutContent!: About;
  contactContent !: Contact;
  footerContent!: Footer;

  darkMode = true;

  loadContent() {
    this.url = "data/content.json";
    this.http.get(this.url).subscribe((data) => {
      this.jsonData = data;
      this.headerContent = this.jsonData.header;
      this.contactContent = this.jsonData.contact;
      this.aboutContent = this.jsonData.about;
      this.footerContent = this.jsonData.footer;
    });

  }

  loadProjects() {

  }

  ngOnInit(): void {
    this.loadContent()
  }

}
