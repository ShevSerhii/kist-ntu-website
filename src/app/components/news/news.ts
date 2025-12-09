import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';
import { NEWS_DATA } from '../../data/models';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class NewsComponent {
  news = NEWS_DATA;
}