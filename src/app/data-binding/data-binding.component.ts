import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nomeDoCurso: string = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

  public onMudouValor(evento) {
    console.log('Valor obtido no componente pai: ' + evento.novoValor);
  }

}
