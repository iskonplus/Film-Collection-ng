import { computed, Injectable, signal } from '@angular/core';
import { getFilms } from '../../data/db.films';
import { Film } from '../../types/film.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  readonly films = signal<Film[]>(getFilms());

  readonly favoriteFilms = computed(() =>
    this.films().filter((film) => film.isFavorite)

  );

  getFilmById(id: number): Film | undefined {
    return this.films().find((film) => film.id === id);
  }

  toggleFavorite(id: number): void {
    this.films.update((films) =>
      films.map((film) => film.id === id ? { ...film, isFavorite: !film.isFavorite } : film)
    );
  }


}
