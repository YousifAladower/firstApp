import {RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import {MainComponent} from './main/main.component';
import { ErrorNotfoundPageComponent } from './layout/error-notfound-page/error-notfound-page.component';
export const routes: Routes = [
  {
    path:"aboutus",
    component:AboutUsComponent

  },
  {
    path:"",
    component:MainComponent

  },
  {
    path:"**",
    component:ErrorNotfoundPageComponent

  }
];




