import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SliderComponent } from './Components/slider/slider.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { FAQComponent } from './Components/faq/faq.component';
import { AdsStoreComponent } from './Components/ads-store/ads-store.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FAQComponent,
    HeaderComponent,
    RegisterComponent,
    SliderComponent,
    LoginComponent,
    AdsStoreComponent,
    FooterComponent,
    HomeComponent,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
