import { Injectable } from '@angular/core';

import { SessionService } from './../session/session.service';
import { HeaderService } from './../http/header.service';

@Injectable()
export class ItemService {

  constructor(private SessionService: SessionService, private HeaderService: HeaderService) { }

  getItens() {
    const itens = this.SessionService.getValor('itens');
    if (itens) {
      return JSON.parse(itens);
    }
    return [];
  }

  setItens(itens) {
    this.SessionService.setValor('itens', JSON.stringify(itens));
  }

  getItem() {
    const item = this.SessionService.getValor('item');
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }

  setItem(itens) {
    this.SessionService.setValor('item', JSON.stringify(itens));
  }
}
