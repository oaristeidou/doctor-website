import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  currentLang: string = 'de';

  constructor(private translate: TranslateService) {
    // Sync header's currentLang with TranslateService
    this.currentLang = translate.currentLang || translate.defaultLang || 'de';

    translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}
