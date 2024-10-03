import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
  temperaturaCelsius: number | null = null;
  temperaturaFahrenheit: number | null = null;
  temperaturaKelvin: number | null = null;

  converterTemperatura(): void {
    if (this.temperaturaCelsius !== null) {
      this.temperaturaFahrenheit = (this.temperaturaCelsius * 9 / 5) + 32;
      this.temperaturaKelvin = this.temperaturaCelsius + 273.15;
    }
  }
}
