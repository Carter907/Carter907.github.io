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
  styles: `

    .language-item {
      @apply w-1/2
      flex gap-20
      p-5
      select-none
      m-auto
      bg-blue-400
      shadow-xl
      bg-opacity-5
    }
  `
})
export class SkillsComponent {

  protected readonly faJava = faJava;
  protected readonly faRust = faRust;
}
