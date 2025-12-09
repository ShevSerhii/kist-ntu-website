import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';
import { STAFF_DATA, Staff } from '../../data/models';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './staff.html',
  styleUrl: './staff.scss'
})
export class StaffComponent {
  // Raw data
  allStaff = STAFF_DATA;
  
  // Default filter
  activeFilter = 'Всі';

  // Filter categories
  filters = ['Всі', 'Професори', 'Доценти', 'Викладачі', 'Асистенти'];

  // Logic to filter data
  get filteredStaff(): Staff[] {
    if (this.activeFilter === 'Всі') {
      return this.allStaff;
    }

    return this.allStaff.filter(p => {
      const pos = p.position.toLowerCase();
      
      switch (this.activeFilter) {
        case 'Професори':
          // Includes Head of Department (Завідувач) and Professors
          return pos.includes('професор') || pos.includes('завідувач');
        case 'Доценти':
          return pos.includes('доцент');
        case 'Викладачі':
          return pos.includes('викладач') && !pos.includes('асистент');
        case 'Асистенти':
          return pos.includes('асистент');
        default:
          return true;
      }
    });
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}