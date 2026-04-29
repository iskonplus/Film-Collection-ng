import { Routes } from "@angular/router";

export const filmDetailsRoutes: Routes = [
  {
    path: "film-details/:id",
    loadComponent: async () => {
      const m = await import("../pages/film-details/film-details");
      return m.FilmDetails;
    },
  },
];
