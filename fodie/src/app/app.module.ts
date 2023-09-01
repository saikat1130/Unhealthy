import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { TitleComponent } from './components/pages/title/title.component';
import { ApiService } from './api.service';
// import { CartComponent } from './components/pages/cart/cart.component';





@NgModule({


  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchComponent, TitleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
