import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TranslateModule],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class TeamComponent {
}
