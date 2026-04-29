import { Component, computed, inject, signal } from '@angular/core';
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
  searchValue = signal<string>('');

  favoriteToggled(id: number): void {
    this.filmService.toggleFavorite(id);
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchValue.set(input.value);
  }

  filteredFilms = computed(() => {
    const value = this.searchValue().trim().toLocaleLowerCase();
    
    return this.filmService.films().filter(film => {
      return film.title.toLowerCase().includes(value);
    })
  })
}
