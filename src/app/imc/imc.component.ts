import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  peso: number | null = null;
  altura: number | null = null;
  imc: number | null = null;
  classificacao: string = '';

  calcularIMC(): void {
    if (this.peso !== null && this.altura !== null && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      this.classificacao = this.classificarIMC(this.imc);
    }
  }

  private classificarIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      return 'Obesidade grau I';
    } else if (imc >= 35 && imc < 40) {
      return 'Obesidade grau II';
    } else {
      return 'Obesidade grau III';
    }
  }
}
