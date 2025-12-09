import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {}