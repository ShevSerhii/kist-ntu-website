import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}