import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './Components/slider/slider.component';
import { AdsStoreComponent } from './Components/ads-store/ads-store.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AdsStoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
