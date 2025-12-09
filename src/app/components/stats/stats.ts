import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.html',
  styleUrls: ['./stats.scss']
})
export class StatsComponent implements AfterViewInit {
  @ViewChildren('counter') counters!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCount(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.counters.forEach(c => observer.observe(c.nativeElement));
  }

  private animateCount(el: HTMLElement) {
    const target = +el.getAttribute('data-val')!;
    let start = 0;
    const duration = 2000; 
    const step = Math.ceil(target / (duration / 16));
    
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        el.innerText = target.toString();
        clearInterval(timer);
      } else {
        el.innerText = start.toString();
      }
    }, 16);
  }
}