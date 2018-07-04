import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { Item } from './../_shared/item/item';
import { ItemService } from './../_shared/item/item.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public itens: Array<Item>;

  constructor(private router: Router, private itemService: ItemService, private confirmationService: ConfirmationService) { }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.itens = this.itemService.getItens();

  }

  removerItem(item) {
    var index = this.itens.indexOf(item, 0);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
    this.itemService.setItens(this.itens);
  }

  editar(item) {
    this.itemService.setItem(item);

    this.router.navigate(['/inicio']);
  }


  remover(item) {
    this.confirmationService.confirm({
      header: 'Atenção',
      message: 'Você tem certeza que deseja excluir este item?',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.removerItem(item);
      }
    });
  }


}
