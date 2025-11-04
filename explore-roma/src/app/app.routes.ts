import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Luoghi } from './pages/luoghi/luoghi';
import { DettaglioLuogo } from './pages/dettaglio-luogo/dettaglio-luogo';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'luoghi', component: Luoghi },
  { path: 'luoghi/:id', component: DettaglioLuogo },
];
