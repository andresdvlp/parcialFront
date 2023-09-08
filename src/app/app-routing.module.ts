import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MecanicoComponent } from './component/mecanico/mecanico.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { VehiculoComponent } from './component/vehiculo/vehiculo.component';

const routes: Routes = [
  { path: 'mecanico', component: MecanicoComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'vehiculo', component: VehiculoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
