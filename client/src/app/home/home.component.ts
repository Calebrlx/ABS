import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentSlideNumber = 0;
  totalSlideNumber = 5; // Number of slides
  slides = Array(this.totalSlideNumber).fill(0); // Just an example to create slides
  ticking = false;

  @HostListener('window:wheel', ['$event'])
  parallaxScroll(event: any): void {
    if (!this.ticking) {
      const delta = this.normalizeWheelDelta(event);
      if (delta < 0 && this.currentSlideNumber !== this.totalSlideNumber - 1) {
        this.currentSlideNumber++;
        this.nextItem();
      } else if (delta > 0 && this.currentSlideNumber !== 0) {
        this.currentSlideNumber--;
        this.previousItem();
      }
      this.slideDurationTimeout(600);
    }
  }

  normalizeWheelDelta(event: any): number {
    // Normalize wheel delta across browsers
    return (event.deltaY < 0 ? 1 : -1);
  }

  slideDurationTimeout(duration: number): void {
    this.ticking = true;
    setTimeout(() => this.ticking = false, duration);
  }

  nextItem(): void {
    // Add logic for next item if necessary
  }

  previousItem(): void {
    // Add logic for previous item if necessary
  }
}
