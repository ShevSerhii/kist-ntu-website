import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';
import { PUB_DATA } from '../../data/models';

@Component({
  selector: 'app-science',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './science.html',
  styleUrl: './science.scss'
})
export class ScienceComponent {
  pubs = PUB_DATA;
}