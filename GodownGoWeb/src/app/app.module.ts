import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './shared/components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
