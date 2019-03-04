import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { MessagesComponent } from './messages/messages.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { MaisVendidosComponent } from './mais-vendidos/mais-vendidos.component';
import { HomemAranhaComponent } from './homem-aranha/homem-aranha.component';
import { IronManComponent } from './iron-man/iron-man.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    MessagesComponent,
    ComicDetailComponent,
    MaisVendidosComponent,
    HomemAranhaComponent,
    IronManComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgScrollbarModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
