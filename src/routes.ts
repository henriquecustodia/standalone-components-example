import { importProvidersFrom } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./app/pages/home-page/home-page.component').then(m => m.HomePageComponent)
    }
]

export const routerProviders = importProvidersFrom([
    RouterModule.forRoot(ROUTES)
]);