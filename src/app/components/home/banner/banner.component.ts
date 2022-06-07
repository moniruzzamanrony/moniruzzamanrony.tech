import { Component, OnInit } from '@angular/core';

import {trigger, style, animate, transition, stagger, query } from '@angular/animations';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
// @ts-ignore
import data from '../../../../assets/data/basic-data.json';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          stagger(50, [
            animate(
              '250ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

  JsonData = data;
  constructor(
    public analyticsService: AnalyticsService
  ) {}

  ngOnInit(): void {
  }


}
