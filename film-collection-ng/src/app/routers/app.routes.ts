import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { filmDetailsRoutes } from './film-details.routes';
import { aboutRoutes } from './about.routes';
import { notFoundRoutes } from './not-found.routes';
import { favoritesRoutes } from './favorites.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home },
  ...filmDetailsRoutes,
  ...aboutRoutes,
  ...favoritesRoutes,
  ...notFoundRoutes,
  { path: '**', redirectTo: '404'},
];
