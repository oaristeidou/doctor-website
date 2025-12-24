import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LocationService } from './core/services/location.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatSidenavModule, MatListModule, RouterModule, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'doctor-website';

  constructor(
    private translate: TranslateService,
    private locationService: LocationService
  ) {
    // Basic init
    translate.addLangs(['de', 'en', 'el']);
    translate.setDefaultLang('de');
  }

  ngOnInit() {
    // Try to detect location
    this.locationService.getCountryCode().subscribe({
      next: (countryCode) => {
        console.log('Detected Country:', countryCode);
        let targetLang = 'en'; // Default fallback for unknown

        switch (countryCode) {
          case 'DE':
          case 'AT':
          case 'CH':
          case 'LI':
            targetLang = 'de';
            break;
          case 'GR':
          case 'CY':
            targetLang = 'el';
            break;
          default:
            targetLang = 'en';
        }

        console.log('Setting language to:', targetLang);
        this.translate.use(targetLang);
      },
      error: (err) => {
        console.warn('Location detection failed, falling back to browser language', err);
        const browserLang = this.translate.getBrowserLang();
        const fallback = browserLang && browserLang.match(/en|de|el/) ? browserLang : 'de';
        this.translate.use(fallback);
      }
    });
  }
}
