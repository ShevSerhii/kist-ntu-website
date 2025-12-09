import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PARTNERS_DATA } from '../../data/models';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class PartnersComponent {
  list = PARTNERS_DATA;
}