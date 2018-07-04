import { ErrorHandler, Injectable } from '@angular/core';

import { AlertsService } from './../alerts/alerts.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private AlertsService: AlertsService) { }

    handleError(error: Error) {
        console.log(error);
        this.AlertsService.mostraMensagemErro(error.message);
    }
}
