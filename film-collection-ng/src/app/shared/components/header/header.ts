import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Breadcrumbs],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {


}
