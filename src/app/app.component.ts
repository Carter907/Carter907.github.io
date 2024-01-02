import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {faLinkedin, faMailchimp} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEnvelope, faMailBulk, faMailForward, faMailReply, faMailReplyAll} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NgOptimizedImage, FaIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
  protected readonly faLinkedin = faLinkedin;
  protected readonly faMailchimp = faMailchimp;
  protected readonly faMailBulk = faMailBulk;
  protected readonly faMailReply = faMailReply;
  protected readonly faMailForward = faMailForward;
  protected readonly faMailReplyAll = faMailReplyAll;
  protected readonly faEnvelope = faEnvelope;
}
