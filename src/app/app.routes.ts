import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {SkillsComponent} from "./pages/skills/skills.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: '' }


];
