import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { InicioComponent } from './inicio/inicio.component';
import { ListaComponent } from './lista/lista.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'lista', component: ListaComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
    APP_ROUTES
);