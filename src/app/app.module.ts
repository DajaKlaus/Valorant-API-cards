import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GekkoComponent } from './gekko/gekko.component';
import { JettComponent } from './jett/jett.component';
import { KilljoyComponent } from './killjoy/killjoy.component';
import { ReynaComponent } from './reyna/reyna.component';
import { ViperComponent } from './viper/viper.component';
import { GenericComponent } from './generic/generic.component';

@NgModule({
  declarations: [
    AppComponent,
    GekkoComponent,
    JettComponent,
    KilljoyComponent,
    ReynaComponent,
    ViperComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
