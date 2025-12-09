import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { StatsComponent } from './components/stats/stats';
import { AboutComponent } from './components/about/about';
import { ProgramsComponent } from './components/programs/programs';
import { ScienceComponent } from './components/science/science';
import { StaffComponent } from './components/staff/staff';
import { NewsComponent } from './components/news/news';
import { PartnersComponent } from './components/partners/partners';
import { FooterComponent } from './components/footer/footer';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    AboutComponent,
    ProgramsComponent,
    ScienceComponent,
    StaffComponent,
    NewsComponent,
    PartnersComponent,
    FooterComponent,
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}