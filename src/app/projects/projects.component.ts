import { Component, Input } from '@angular/core';
import { Projects, ProjectPage } from '../classSetups';
@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projects!: Projects[];
  @Input() content!: ProjectPage;
  @Input() darkMode!: boolean;


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


  ngOnInit() {
    this.filteredProjects = this.projects
  }

}
