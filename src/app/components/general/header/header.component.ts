import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FormControl } from '@angular/forms';
// @ts-ignore
import data from '../../../../assets/data/basic-data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('animateMenu', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(-50%)' }),
          stagger(50, [
            animate(
              '250ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  responsiveMenuVisible = false;
  pageYPosition: number;
  languageFormControl: FormControl = new FormControl();
  cvName = '';
  JsonData = data;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  scroll(el): void {
    if (document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router
        .navigate(['/home'])
        .then(() =>
          document.getElementById(el).scrollIntoView({ behavior: 'smooth' })
        );
    }
    this.responsiveMenuVisible = false;
  }

  downloadCV(): void {
    const url = window.location.href;
    // Open a new window with the CV
    window.open(
      url + '/../assets/cv/' + this.JsonData.personal.cvName,
      '_blank'
    );
  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event): void {
    this.pageYPosition = window.pageYOffset;
  }

  changeLanguage(language: string): void {
    this.languageFormControl.setValue(language);
  }

  redirectBlogSite() {
    window.open("https://medium.com/@eproni29","_blank")
  }
}
