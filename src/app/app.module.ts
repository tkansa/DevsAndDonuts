import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutComponent } from './donut/donut.component';
import { DevsComponent } from './devs/devs.component';

const appRoutes: Routes = [
  { path: 'donuts', component: DonutsComponent},
  { path: 'donuts/:id', component: DonutComponent },
  { path: 'devs', component: DevsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutComponent,
    DevsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
