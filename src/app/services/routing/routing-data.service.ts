import { Injectable } from '@angular/core';
import { LoadJsonService } from '../json/load-json.service';
import { ProjectPage, Projects } from '../../classSetups';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Resolve } from '@angular/router';
import { DarkModeService } from '../darkMode/dark-mode.service';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoutingDataService implements Resolve<any> {

  darkMode !: boolean
  constructor(private json: LoadJsonService) {


  };


  resolve(): Observable<Object> {
    const file1 = this.json.loadProjects();
    const file2 = this.json.loadContent();

    return forkJoin([file1, file2]).pipe(
      map(([projects, content]) => {
        return { file1: projects, file2: content };
      })
    );
  }




}
