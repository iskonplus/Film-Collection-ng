import { Component, inject } from '@angular/core';
import { FilmService } from '../../shared/services/film.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DurationPipe } from '../../shared/pipes/duration-pipe';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  private readonly filmService = inject(FilmService);
  private readonly route = inject(ActivatedRoute);

    readonly film = this.filmService.getFilmById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
}
