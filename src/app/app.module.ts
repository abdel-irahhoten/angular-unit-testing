import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookApiService} from './service/book-api.service';
import {BookApiServiceMock} from './mocks/book-api.service.mock';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BookApiService,
    BookApiServiceMock,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
