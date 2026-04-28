import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { Breadcrumb } from '../../../types/breadCrumb.interface';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);

  readonly breadcrumbs = computed<Breadcrumb | undefined>(() => {
    this.router.currentNavigation();
    const url = this.router.url;

    if (url === '/') return undefined;

    if (url === '/about') return { label: 'About', url: '/about' };

    if (url.startsWith('/film-details')) {
      const id = Number(url.split('/')[2]);
      const film = this.filmService.getFilmById(id);

      if (film) return { label: film.title , url };
      this.router.navigate(['/404']);
    }

    return { label: 'Page not found', url: '/404' };
  });
}
