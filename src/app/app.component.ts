import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Header, Contact, About, Footer, ProjectPage, Projects } from './classSetups';
import { LoadJsonService } from './services/json/load-json.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DarkModeService } from './services/darkMode/dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'portfolio';

  id !: string;
  url !: string;
  jsonData !: any;
  headerContent !: Header;
  aboutContent!: About;
  contactContent !: Contact;
  footerContent!: Footer;
  projectPageContent !: ProjectPage;


  constructor(private http: HttpClient, private json: LoadJsonService, private route: ActivatedRoute, private dark: DarkModeService, private router: Router) {
    this.dark.darkMode$.subscribe((data) => {
      this.darkMode = data;
    })
  }


  projectsContent !: Projects[];

  darkMode = false

  toggle(): void {
    this.dark.toggleDarkMode();

  }

  ngOnInit(): void {

    this.json.loadContent().subscribe((data) => {
      this.jsonData = data;
      this.headerContent = this.jsonData.header;
      this.contactContent = this.jsonData.contact;
      this.aboutContent = this.jsonData.about;
      this.footerContent = this.jsonData.footer;
      this.projectPageContent = this.jsonData.project;
    });
    this.json.loadProjects().subscribe((data) => {
      this.jsonData = data;
      this.projectsContent = this.jsonData.projects;
    });
  }

}
