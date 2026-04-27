import { Routes } from "@angular/router";

export const aboutRoutes: Routes = [
  {
    path: "about",
    loadComponent: async () => {
      const m = await import("../pages/about/about");
      return m.About;
    },
  },
];
