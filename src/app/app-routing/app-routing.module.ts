import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  Routes
} from '@angular/router';
import {
  AppComponent
} from '../app.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '/about',
    component: AppComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule {}
