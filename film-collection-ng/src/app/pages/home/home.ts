import { Component, inject } from '@angular/core';
import { FilmCard } from '../../shared/components/film-card/film-card';
import { FilmService } from '../../shared/services/film.service';

@Component({
  selector: 'app-home',
  imports: [FilmCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  filmService = inject(FilmService);

  favoriteToggled(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
