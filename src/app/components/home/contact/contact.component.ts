import {Component, OnInit} from '@angular/core';
// @ts-ignore
import data from '../../../../assets/data/basic-data.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  JsonData = data;
  constructor() { }

  ngOnInit(): void {
  }

}
