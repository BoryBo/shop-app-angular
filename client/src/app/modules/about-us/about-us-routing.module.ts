import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUs2Component } from './about-us-2/about-us-2.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
  {
    // TODO http://localhost:4200/about-us/about-us-2
    path: 'about-us-2',
    component: AboutUs2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
