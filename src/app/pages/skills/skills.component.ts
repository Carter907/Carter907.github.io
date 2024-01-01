import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faJava, faRust} from "@fortawesome/free-brands-svg-icons";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    FaIconComponent,
    NgOptimizedImage
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  protected readonly faJava = faJava;
  protected readonly faRust = faRust;
}
