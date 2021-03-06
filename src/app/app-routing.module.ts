import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PublicGuard, ProtectedGuard } from 'ngx-auth'

import { HomeComponent } from './home/home.component'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [ProtectedGuard],
    component: HomeComponent
  },
  {
    path: 'login',
    canActivate: [PublicGuard],
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'refrigerator',
    canActivate: [ProtectedGuard],
    loadChildren: './refrigerator/refrigerator.module#RefrigeratorModule'
  },
  {
    path: 'recipes',
    canActivate: [ProtectedGuard],
    loadChildren: './recipes/recipes.module#RecipesModule'
  },
  {
    path: 'listings',
    canActivate: [ProtectedGuard],
    loadChildren: './listings/listings.module#ListingsModule'
  },
  {
    path: 'schedules',
    canActivate: [ProtectedGuard],
    loadChildren: './schedules/schedules.module#SchedulesModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
