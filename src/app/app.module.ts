
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RequestOptions, Http } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { routing } from './app-routing.module';
import { TextMaskModule } from 'angular2-text-mask';
import { PathLocationStrategy, LocationStrategy, DatePipe } from '@angular/common';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ProgressHttpModule } from 'angular-progress-http';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ListaComponent } from './lista/lista.component';
import { InicioComponent } from './inicio/inicio.component';

import { ItemService } from './_shared/item/item.service';
import { SessionService } from './_shared/session/session.service';
import { AppAutoFocusDirective } from './_shared/focus/autofocus.directive';
import { LoaderService } from './_shared/loader/loader.service';
import { httpServiceFactory } from './_shared/http/http-service.factory';
import { LoaderComponent } from './_shared/loader/loader.component';
import { HeaderService } from './_shared/http/header.service';
import { GlobalErrorHandler } from './_shared/error-handler/error-handler';
import { AlertsComponent } from './_shared/alerts/alerts.component';
import { AlertsService } from './_shared/alerts/alerts.service';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ListaComponent,
    InicioComponent,
    AppAutoFocusDirective,
    LoaderComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    InputMaskModule,
    FormsModule,
    HttpModule,
    TextMaskModule,
    SlimLoadingBarModule.forRoot(),
    ProgressHttpModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule
  ],
  providers: [
    DatePipe,
    ItemService,
    SessionService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    LoaderService,
    HeaderService,
    ConfirmationService,
    HttpClient,
    {
      provide: Http,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, LoaderService]
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    AlertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
