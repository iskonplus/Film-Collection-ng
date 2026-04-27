import { NotFound } from './../pages/not-found/not-found';
import { Routes } from "@angular/router";

export const notFoundRoutes: Routes = [
  {
    path: "**",
    loadComponent: async () => {
      const m = await import("../pages/not-found/not-found");
      return m.NotFound;
    },
  },
];
