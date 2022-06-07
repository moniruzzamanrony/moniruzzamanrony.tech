import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.initLanguage();

    this.titleService.setTitle('Moniruzzaman Rony | Software Engineer');

    this.metaService.addTags([
      {
        name: 'keywords',
        content:
          'Frontend, software, developer,backend,software engineer, java developer',
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
