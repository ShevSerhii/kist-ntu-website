import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimate]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.classList.add('animate-on-scroll');
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}