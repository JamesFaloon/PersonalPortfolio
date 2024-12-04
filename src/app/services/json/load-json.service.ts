import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoadJsonService {

  constructor(private http : HttpClient) { }


  contentUrl = "data/content.json";
  projectUrl = "data/project.json";

  loadContent() {
      return this.http.get(this.contentUrl);
    };


  loadProjects() {
    return this.http.get(this.projectUrl);
  }

  }

