import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoliceComponent } from './apolice/apolice.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ImcComponent } from './imc/imc.component';
import { MediaComponent } from './media/media.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';

const routes: Routes = [
  {path:'media',component: MediaComponent},
  {path:'apolice',component: ApoliceComponent},
  {path:'temperatura',component: TemperaturaComponent},
  {path:'imc',component: ImcComponent},
  {path:'calculadora',component: CalculadoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
