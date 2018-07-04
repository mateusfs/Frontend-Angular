import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }

  getValor(chave: string) {
    return sessionStorage.getItem(chave);
  }

  setValor(chave: string, valor: string) {
    sessionStorage.setItem(chave, valor);
  }

  clear() {
    sessionStorage.clear();
  }
}


