import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit, OnChanges {

  @Input() produtos: any[] = [];
  @Output() produtoParaCarrinho = new EventEmitter();

  @Input() quantidadeCarrinho: any = 0;

  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.quantidadeCarrinho) {
      this.quantidadeCarrinho = changes.quantidadeCarrinho.currentValue;
    }
  }

  emitAddCarrinho(produto) {
    this.produtoParaCarrinho.emit({produto: produto})
  }

}
