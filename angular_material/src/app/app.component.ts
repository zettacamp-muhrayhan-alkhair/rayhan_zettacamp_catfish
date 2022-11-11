import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_material';
  selectedLang: any = null;

  constructor(private translateService: TranslateService) {}

  setLanguage(lang: string) {
    this.selectedLang = lang;
    this.translateService.use(lang);
  }
}
