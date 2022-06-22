import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

// tslint:disable-next-line:no-submodule-imports
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';

import { ProjectsComponent } from './projects/projects.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [CommonModule, NgbNavModule, CarouselModule],
})
export class HomeModule {}
