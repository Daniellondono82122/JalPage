import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EdilesComponent } from './components/ediles/ediles.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

// Servicios
import { EdilesService, Edil } from './services/ediles.service';


// Rutas
import { ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    EdilesComponent,
    UbicacionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: false})
  ],
  providers: [
    EdilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
