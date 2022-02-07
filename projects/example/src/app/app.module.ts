import { MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MiaCategoryCoreModule } from 'projects/agencycoda/mia-category-core/src/public-api';
import { MiaCategoryEditorModule } from 'projects/agencycoda/mia-category-editor/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MiaCategoryCoreModule,
    MiaCategoryEditorModule
  ],
  providers: [
    { 
      provide: MIA_CORE_PROVIDER, 
      useValue: {
        baseUrl: 'https://dorotea-interno.uc.r.appspot.com/'
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
