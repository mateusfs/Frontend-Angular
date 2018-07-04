import { Component, OnInit } from '@angular/core';

import { AlertsService } from './alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  public messageSuccess = '';
  public messageInfo = '';
  public messageWarning = '';
  public messageDanger = 'Ocorreu um problema durante sua solicitação. Por favor tente novamente mais tarde';

  public showSuccess: boolean;
  public showInfo: boolean;
  public showWarning: boolean;
  public showDanger: boolean;

  constructor(private AlertsService: AlertsService) {
    this.AlertsService.mensagemAvisoEmitter.subscribe(mensagem => {
      this.messageSuccess = mensagem;
      this.showSuccess = true;
    });

    this.AlertsService.mensagemInfoEmitter.subscribe(mensagem => {
      this.messageInfo = mensagem;
      this.showInfo = true;
    });

    this.AlertsService.mensagemAvisoEmitter.subscribe(mensagem => {
      this.messageWarning = mensagem;
      this.showWarning = true;
    });

    this.AlertsService.mensagemErroEmitter.subscribe(mensagem => {
      this.showDanger = true;
    });

    this.AlertsService.turnOffAlertsEmitter.subscribe(mensagem => {
      this.showSuccess = false;
      this.showInfo = false;
      this.showWarning = false;
      this.showDanger = false;
    });

    this.showSuccess = false;
    this.showInfo = false;
    this.showWarning = false;
    this.showDanger = false;
  }

  ngOnInit() {
  }

  close() {
    this.showSuccess = false;
    this.showInfo = false;
    this.showWarning = false;
    this.showDanger = false;
  }
}
