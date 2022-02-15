import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { ServiceComponent } from './service/service.component';
import { TimelinesComponent } from './timelines/timelines.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
