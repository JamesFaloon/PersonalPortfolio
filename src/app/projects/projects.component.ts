import { Component, Input } from '@angular/core';
import { Projects, ProjectPage } from '../classSetups';
import { LikeService } from '../services/like/like.service';
@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private likeService: LikeService) {

  }


  @Input() projects!: Projects[];
  @Input() content!: ProjectPage;
  @Input() darkMode!: boolean;
  liked: boolean[] = [false, false, false, false, false];






  filteredProjects: {
    projectId: number,
    title: String,
    image: String,
    description: String,
    links: String[],
    actions: String[]
  }[] = [];



  filterData(projectName: String) {
    this.filteredProjects = [];
    for (let project of this.projects) {
      if (project.title.toLowerCase().substring(0, projectName.length) === this.content.projectName.toLowerCase()) {
        this.filteredProjects.push(project);
      }
    }
  }


  likeCard(like: number) {
    this.liked[like] = this.likeService.like(this.liked[like]);

  }
  ngOnInit() {
    this.filteredProjects = this.projects
  }

}
