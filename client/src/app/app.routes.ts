import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// array of type Routes
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    // lazy-loading
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
];
