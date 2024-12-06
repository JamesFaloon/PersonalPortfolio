import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DarkModeService } from '../services/darkMode/dark-mode.service';
import { LikeService } from '../services/like/like.service';
@Component({
  selector: 'app-single-project',
  standalone: false,

  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css'
})
export class SingleProjectComponent {
  constructor(private route: ActivatedRoute, private dark: DarkModeService, private likeService : LikeService) { }


  id !: String;
  projects !: any;
  content !: any;
  darkMode!: boolean;
  liked: boolean = false;

  likeCard() {
    this.liked = this.likeService.like(this.liked);

  }
  ngOnInit() {
    this.dark.darkMode$.subscribe((data) => {
      this.darkMode = data;
    })
    const rawData = this.route.snapshot.data['project'];
    this.projects = rawData.file1.projects;
    this.content = rawData.file2.project;
    this.route.params.subscribe(params => {
      this.id = params['id']; // log the parameter value 
      


    });
    const num = Number(this.id)
    this.projects = this.projects[num - 1];

  }
}
