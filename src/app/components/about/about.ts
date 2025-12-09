import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {}