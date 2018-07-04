import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Item } from './../_shared/item/item';
import { ItemService } from './../_shared/item/item.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  public item: Item = new Item();
  public itens: Array<Item>;
  public formulario: FormGroup;
  public formularioSenha: FormGroup;
  public validaFormulario = true;
  public isPerecivel: boolean = true;
  public isQuantidade: string;

  public nomePlaceholder = 'Nome do Item';
  public nomeClasse: string;

  public unidadePlaceholder = 'Unidade de medida';
  public unidadeClasse: string;

  public qtdPlaceholder = 'Quantidade';
  public qtClasse: string;

  public precoPlaceholder = 'Preço';
  public precoClasse: string;

  public validadePlaceholder = 'Data de validade';
  public validadeClasse: string;

  public fabricadoPlaceholder = 'Data de fabricação';
  public fabricadoClasse: string;


  public date_mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(private router: Router,
    private itemService: ItemService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    if (this.itemService.getItem()) {
      this.item = this.itemService.getItem();
      this.isPerecivel = this.item.perecivel;
      this.isQuantidade = this.item.qtd;
      this.itemService.setItem(null);
    }

    if (!this.item.unidade) {
      this.item.unidade = 'U'
    }

  }


  somenteLetras(event: any) {

    const pattern = /^[a-zA-Z]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (event.keyCode == '32') {
      return true;
    }

    if (!pattern.test(inputChar)) {
      return false;
    }

    return true;
  }

  somenteNumero(event: any) {

    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (event.keyCode == '9' || event.keyCode == '8') {
      return true;
    }

    if (!pattern.test(inputChar)) {
      return false;
    }
  }

  validaQuantidade(event: any) {

    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (event.keyCode == '9' || event.keyCode == '8' && this.item.unidade == 'Q') {
      return true;
    }

    if (this.item.unidade == 'L' && event.target.value.length >= 3) {
      return false;
    }

    var qtd = event.target.value.split(",", 3);

    if (this.item.unidade == 'L' && qtd.length >= 3) {
      return false;
    }

    if (!pattern.test(inputChar)) {
      return false;
    }
  }

  tooglePerecivel(event) {
    this.isPerecivel = false;
    if (event.target.autocomplete == 'on') {
      this.isPerecivel = true;
    }
  }

  salvar() {

    this.formulario = new FormGroup({
      'nome': new FormControl(this.item.nome, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ]),
      'unidade': new FormControl(this.item.unidade, [
        Validators.required,
      ]),
      'preco': new FormControl(this.item.preco, [
        Validators.required,
      ]),
      'fabricado': new FormControl(this.item.fabricado, [
        Validators.required,
        Validators.pattern('^(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/((19|20)\\d\\d)$'),
      ])
    });

    if (this.isPerecivel) {
      this.formulario.addControl('validade', new FormControl(this.item.validade, [
        Validators.required,
        Validators.pattern('^(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/((19|20)\\d\\d)$')
      ]));
    }

    if (!this.isPerecivel && this.validadeClasse !== '') {
      this.validadeClasse = '';
      this.validadePlaceholder = 'Data de validade';
    }

    if (this.validaDataMinima(this.item.fabricado)) {
      this.validaFormulario = false;
    }

    if (this.validadeDataPerecivel(this.item.fabricado, this.item.validade)) {
      this.validaFormulario = false;
      this.item.fabricado = '';
      this.fabricadoClasse = 'classErro';
      this.fabricadoPlaceholder = 'Data de fabricação supeior a validade';
    }

    if (this.formulario.status === 'INVALID') {
      this.validaFormulario = false;
    }

    if (this.formulario.status === 'VALID') {
      this.validaFormulario = true;
    }

    if (this.validaFormulario) {
      this.item.perecivel = this.isPerecivel;
      this.item.qtd = this.isQuantidade;

      this.itens = this.itemService.getItens();

      this.itens.push(this.item);

      this.itemService.setItens(this.itens);

      this.router.navigate(['/lista']);
    }

    this.validaForm('nome', 'Nome do Item');
    this.validaForm('unidade', 'Unidade de medida');
    this.validaForm('preco', 'Preço');
    this.validaForm('fabricado', 'Data de fabricação');

    if (this.isPerecivel) {
      this.validaForm('validade', 'Data de validade');
    }
  }

  validaForm(campo, nome) {
    if (!this.formulario.controls[campo].valid) {

      this[campo + 'Classe'] = 'classErro';
      this[campo + 'Placeholder'] = nome + ' está inválido';

      if (this.formulario.controls[campo].errors['required']) {
        this[campo + 'Classe'] = 'classWarning';
        this[campo + 'Placeholder'] = nome + ' é obrigatório';
      }
    }
  }

  cancelar() {
    this.item.nome = '';
    this.isQuantidade = '';
    this.item.preco = '';
    this.item.validade = '';
    this.item.fabricado = '';
  }

  validaDataMinima(data) {
    return data && new Date(data).getFullYear() >= new Date().getFullYear();
  }

  validadeDataPerecivel(fabricado, validade) {
    return this.isPerecivel && fabricado < validade
  }
}
