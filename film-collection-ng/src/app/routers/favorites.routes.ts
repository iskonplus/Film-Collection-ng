import { Routes } from "@angular/router";

export const favoritesRoutes: Routes = [
  {
    path: "favorites",
    loadComponent: async () => {
      const m = await import("../pages/favorites/favorites");
      return m.Favorites;
    },
  },
];
