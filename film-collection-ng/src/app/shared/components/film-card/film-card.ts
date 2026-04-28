import { Component, input, output } from '@angular/core';
import { Film } from '../../../types/film.interface';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  readonly film = input.required<Film>();
  readonly favoriteToggled = output<number>();
  readonly cardClicked = output<number>();

  onToggleFavorite(): void {
    this.favoriteToggled.emit(this.film().id);

  }

  onCardClick(): void {
    this.cardClicked.emit(this.film().id);

  }
}
