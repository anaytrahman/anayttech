import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NAV_LINKS, SOCIAL_LINKS } from '../../shared/data/portfolio-data';
import { APP_Logo } from '../../shared/file-data/files-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly navLinks = NAV_LINKS;
  readonly socialLinks = SOCIAL_LINKS;
  readonly year = new Date().getFullYear();
  readonly APP_Logo = APP_Logo;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
