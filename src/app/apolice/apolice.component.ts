import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  segurado = {
    nome: '',
    sexo: '',
    idade: 0,
    valorAutomovel: 0
  };
  valorApolice: number | null = null;

  calcularApolice(): void {
    const { sexo, idade, valorAutomovel } = this.segurado;
    
    if (sexo === 'masculino') {
      if (idade <= 25) {
        this.valorApolice = valorAutomovel * 0.15;
      } else {
        this.valorApolice = valorAutomovel * 0.10;
      }
    } else if (sexo === 'feminino') {
      this.valorApolice = valorAutomovel * 0.08;
    } else {
      this.valorApolice = null; // Caso o sexo não seja selecionado corretamente
    }
  }
}

