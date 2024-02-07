import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {SkillsComponent} from "./pages/skills/skills.component";

export const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: 'home' },
  { path: '\\', redirectTo: 'home' },
  { path: '**\'', redirectTo: 'home'}
];
