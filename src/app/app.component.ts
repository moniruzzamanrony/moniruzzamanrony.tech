import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Moniruzzaman Rony | Software Engineer');

    this.metaService.addTags([
      {
        name: 'keywords',
        content:
          'frontend, software, developer,backend,software engineer, java developer,angular,moniruzzaman rony',
      },
      {
        name: 'description',
        content:
          "I'm a software engineer. I've almost 2.5+ years professional experience on this field and have solving capability critical problem of real time project.",
      },
    ]);

    AOS.init();
  }
}
