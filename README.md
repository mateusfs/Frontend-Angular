# Frontend-Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

## Getting Started

Uma aplicação web para realizar o cadastro de itens.

Campo Tipo Obrigatoriedade Validação
Nome do item Texto Sim Tamanho máximo de 50 caracteres
(somente letras)
Unidade de medida Enumeração * Sim -
Quantidade Numérico Não Varia conforme regra da unidade
medida **
Preço Monetário Sim Validações de campo monetário***
Produto perecível Checkbox booleano Sim -
Data de validade Data Só é obrigatório
caso o produto seja
perecível
Data no formato pt-Br. Caso a data
de validade seja inferior a data atual
deve informar que o produto
encontra-se vencido.
Data de fabricação Data Sim Data no formato pt-Br e não pode
ser superior a data de validade
(caso seja um produto perecível)
* Enumeração contendo os seguintes valores: Litro, Quilograma, Unidade.
** Regra da unidade de medida:
- Campos com unidade de medida em litro deve permitir somente números, com até 3 casas decimais e apresentar a
abreviatura “lt” ao final do campo (addon);
- Campos com unidade de medida em Quilograma deve permitir somente números, com até 3 casas decimais e
apresentar a abreviatura “kg” ao final do campo (addon);
- Campos com unidade de medida em Unidade deve permitir somente números inteiros e apresentar a abreviatura “un”
ao final do campo (addon);
*** Validação de campo monetário incluí exibição do tipo de moeda no início do campo e limite de casas decimais
utilizando máscara (preenchimento da direita para esquerda).

Tecnologias e conceitos que serão avaliados:
• Angular 2 + (caso necessário pode ser realizado com Angular JS);
• HTML 5;
• CSS;
• TypeScript / JavaScript;
• Rotas;
• Utilização de LocalStorage;
• Recomenda-se a utilização da biblioteca PrimeNG.
Critérios de avaliação da tela:
• Usabilidade e experiência de uso;
• Responsividade (deve ser ajustável a diferentes tamanhos de tela);
• Padrão visual;
• Cross-browser (deve ser utilizavel em ie 10 +, Edge, Chrome, FireFox)
Critério de avaliação do código:
• Qualidade;
• Clareza;
• Documentação;
• Reutilização (criação de componentes);


## Install server

Run `npm install` for a dev install for depences of the source files.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
