import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  quantidadeCarrinho: number = 0;

  produtos: any[] = [
    {id: '0001', descricao: 'TV LCD 40'},
    {id: '0002', descricao: 'Vídeo-Game PSX'},
    {id: '0003', descricao: 'Livro ABCX'},
    {id: '0004', descricao: 'Celular ASX'}
  ]

  carrinhos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addCarrinho(evento) {
    this.carrinhos.push(evento.produto);
    this.quantidadeCarrinho = this.carrinhos.length;
  }

}
