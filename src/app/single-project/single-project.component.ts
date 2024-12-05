import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DarkModeService } from '../services/darkMode/dark-mode.service';
@Component({
  selector: 'app-single-project',
  standalone: false,

  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css'
})
export class SingleProjectComponent {
  constructor(private route: ActivatedRoute, private dark: DarkModeService) { }


  id !: String;
  project !: any;
  darkMode!: boolean;

  ngOnInit() {
    this.dark.darkMode$.subscribe((data) => {
      this.darkMode = data;
    })

    // subscribe to dark mode changes and update darkMode variable in componen
    this.project = this.route.snapshot.data['project']
    this.route.params.subscribe(params => {
      this.id = params['id']; // log the parameter value 


    });

  }
}
