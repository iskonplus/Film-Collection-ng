import { Component, input, output } from '@angular/core';
import { Film } from '../../../types/film.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  readonly film = input.required<Film>();
  readonly favoriteToggled = output<number>();

  onToggleFavorite(event: MouseEvent): void {
    event.stopPropagation();
    this.favoriteToggled.emit(this.film().id);
  }
}
