import { Component, OnInit } from '@angular/core';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
// @ts-ignore
import data from '../../../../assets/data/basic-data.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('animateFooter', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(100%)' }),
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
export class FooterComponent implements OnInit {
  JsonData = data;

  constructor() {}

  ngOnInit(): void {}
}
