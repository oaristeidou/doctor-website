import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ServicesComponent } from './pages/services/services';
import { TeamComponent } from './pages/team/team';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

