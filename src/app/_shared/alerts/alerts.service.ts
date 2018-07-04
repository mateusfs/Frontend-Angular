import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertsService {

  private mensagemSucesso: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public mensagemSucessoEmitter: Observable<string> = this.mensagemSucesso.asObservable();

  private mensagemInfo: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public mensagemInfoEmitter: Observable<string> = this.mensagemInfo.asObservable();

  private mensagemAviso: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public mensagemAvisoEmitter: Observable<string> = this.mensagemAviso.asObservable();

  private mensagemErro: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public mensagemErroEmitter: Observable<string> = this.mensagemErro.asObservable();

  private turnOffAlerts: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public turnOffAlertsEmitter: Observable<boolean> = this.turnOffAlerts.asObservable();

  constructor() { }

  mostraMensagemSucesso(mensagem: string) {
    this.mensagemSucesso.next(mensagem);
  }

  mostraMensagemInfo(mensagem: string) {
    this.mensagemInfo.next(mensagem);
  }

  mostraMensagemAviso(mensagem: string) {
    this.mensagemAviso.next(mensagem);
  }

  mostraMensagemErro(mensagem: string) {
    this.mensagemErro.next(mensagem);
  }

  removeAlertas() {
    this.turnOffAlerts.next(false);
  }
}
