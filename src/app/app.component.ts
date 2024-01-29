import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {faLinkedin, faMailchimp} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEnvelope, faMailBulk, faMailForward, faMailReply, faMailReplyAll} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NgOptimizedImage, FaIconComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styles: ``
})
export class AppComponent {
  protected readonly faLinkedin = faLinkedin;

  protected readonly faEnvelope = faEnvelope;
}
