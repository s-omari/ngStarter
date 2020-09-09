import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {

  appLanguages: any;
  selectedLangCode: string;
  selectedLanguage: string;
  constructor(public translate: TranslateService) {

    this.appLanguages = [
      { 'name': 'English', 'code': 'en', 'countryCode': 'ca' },
      { 'name': 'French', 'code': 'fr', 'countryCode': 'fr' },
      { 'name': 'German', 'code': 'de', 'countryCode': 'de' },
      { 'name': 'Spanish', 'code': 'es', 'countryCode': 'es' },
    ];


    this.selectedLangCode = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
    this.selectedLanguage = this.appLanguages.filter(lang => lang.code === this.selectedLangCode)[0];

    translate.addLangs(['en', 'fr', 'de , es']);
    translate.setDefaultLang(this.selectedLangCode);

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    // this.selectedLanguage = browserLang;

  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.selectedLangCode = language;
    this.selectedLanguage = this.appLanguages.filter(lang => lang.code === language)[0];

    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
