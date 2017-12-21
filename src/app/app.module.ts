import 'hammerjs'

import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'

import { MaterialModule } from './material.module'
import { CovalentModule } from './covalent.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { LogWritterComponent } from './logs/log-writter/log-writter.component'
import { LogDisplayerComponent } from './logs/log-displayer/log-displayer.component'
import { LogsComponent } from './logs/logs.component'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { RefrigeratorComponent } from './refrigerator/refrigerator.component'
import { RefrigeratorListComponent } from './refrigerator/refrigerator-list/refrigerator-list.component'
import { RefrigeratorEditorComponent } from './refrigerator/refrigerator-editor/refrigerator-editor.component'
import { LoginComponent } from './login/login.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component'
import { RecipesEditorComponent } from './recipes/recipes-editor/recipes-editor.component'
import { RecipesCardsComponent } from './recipes/recipes-cards/recipes-cards.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogsComponent,
    LogWritterComponent,
    LogDisplayerComponent,
    RefrigeratorComponent,
    RefrigeratorListComponent,
    RefrigeratorEditorComponent,
    LoginComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesEditorComponent,
    RecipesCardsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    CovalentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }