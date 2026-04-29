import { Component, computed, inject } from '@angular/core';
import { FilmCard } from '../../shared/components/film-card/film-card';
import { FilmService } from '../../shared/services/film.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [FilmCard, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  filmService = inject(FilmService);

  favorites = computed(() => {
    return this.filmService.films().filter((film) => {
      return film.isFavorite;
    });
  });

  favoriteToggled(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
