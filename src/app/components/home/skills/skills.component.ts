import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// @ts-ignore
import data from '../../../../assets/data/basic-data.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  JsonData = data;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  redirect(route: string, event): void {
    const id = event.target.id;
    if (id === 'demoLink' || id === 'ghLink') {
      return;
    }
    window.open(route, '_blank');
  }
}
