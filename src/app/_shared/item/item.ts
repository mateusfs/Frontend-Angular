export class Item {
    nome: string;
    unidade: string;
    qtd: string;
    preco: string;
    perecivel: boolean;
    validade: string;
    fabricado: string;

    constructor() {
    }

    static fromJson(data) {
        const item = Object.assign(new Item(), data);

        return item;
    }
}
