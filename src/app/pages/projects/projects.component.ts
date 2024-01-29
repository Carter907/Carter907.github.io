import { Component } from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './projects.component.html',
  styles: ``
})
export class ProjectsComponent {

  protected readonly faGithub = faGithub;
}
