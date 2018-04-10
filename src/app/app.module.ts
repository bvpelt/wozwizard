import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {EntiteitenComponent} from './entiteiten/entiteiten.component';
import {SorteringenComponent} from './sorteringen/sorteringen.component';


@NgModule({
  declarations: [
    AppComponent,
    EntiteitenComponent,
    SorteringenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
