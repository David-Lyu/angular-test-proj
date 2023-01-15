import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentInjectionComponent } from './components/content-injection/content-injection.component';
import { AnchorTagComponent } from './components/anchor-tag/anchor-tag.component';

@NgModule({
  declarations: [AppComponent, ContentInjectionComponent, AnchorTagComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
