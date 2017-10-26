import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LegoNinjagoSearchComponent } from './feature/lego-ninjago-search/lego-ninjago-search.component';
import { FeatureFlagService } from './feature-flag.service';

@NgModule({
  declarations: [
    AppComponent,
    LegoNinjagoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FeatureFlagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
