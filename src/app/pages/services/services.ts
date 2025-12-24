import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule, MatListModule, TranslateModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
}
