import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './programs.html',
  styleUrl: './programs.scss'
})
export class ProgramsComponent {}