import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PublicGuard, ProtectedGuard } from 'ngx-auth'

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'

import { RecipesComponent } from './recipes/recipes.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: 'home',
    canActivate: [ProtectedGuard],
    component: HomeComponent
  },
  {
    path: 'refrigerator',
    canActivate: [ProtectedGuard],
    loadChildren: './refrigerator/refrigerator.module#RefrigeratorModule'
  },
  {
    path: 'login',
    canActivate: [PublicGuard],
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
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
