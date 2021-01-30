import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    PipesComponent,
    CustomPipe,
    // LoginComponent
  ],
  imports: [
 


    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
