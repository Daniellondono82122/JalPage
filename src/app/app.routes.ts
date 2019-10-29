import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { EdilesComponent } from './components/ediles/ediles.component';




export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'ubicacion', component: UbicacionComponent },
    { path: 'ediles', component: EdilesComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]