import { Component, OnInit } from '@angular/core';
// @ts-ignore
import data from '../../../../assets/data/basic-data.json';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  active = 0;
  JsonData = data;
  constructor() {}

  ngOnInit(): void {}
}
