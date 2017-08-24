// Steps to create an NG router
// 1. Add below code
// 2. imports for components
// 3. import routing in app.module.ts
// 4. add routing to imports list in app.module.ts
// 5. add <router-outlet></router-outlet> to app.component.html
// 6. links to routes looks like this -> routerLink="about" in an a tag
//
// note: you may also need to import Router from ng to route to components

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom components
import { SecretComponent } from './secret/secret.component';
import { AboutComponent } from './about/about.component';

import { AuthGuardService } from "./auth-guard.service";


const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [AuthGuardService]
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
