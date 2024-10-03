import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  AC1: number = 0;
  AC2: number = 0;
  AG: number = 0;
  AF: number = 0;
  resultado: number = 0;
  media: number = 0;

  calcular() {
    this.media =  (this.AC1 * 0.15) + (this.AC2 *0.30) + (this.AG * 0.10) + (this.AF * 0.45)
    this.resultado = this.media
  }
}
