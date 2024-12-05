import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { LoadJsonService } from './services/json/load-json.service';
import { RoutingDataService } from './services/routing/routing-data.service';

const routes: Routes = [
  { path: "", component: ProjectsComponent, resolve: { project: RoutingDataService } },
  { path: "project/:id", component: SingleProjectComponent, resolve: { project: RoutingDataService } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
