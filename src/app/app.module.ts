import 'hammerjs'

import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'

import { AuthenticationModule } from './services/auth.module'

import { AppRoutingModule } from './app-routing.module'

import { MaterialModule } from './material.module'
import { CovalentModule } from './covalent.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AuthenticationModule,
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
