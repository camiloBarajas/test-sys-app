import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarFacturaComponent } from './src/app/agregar-factura/agregar-factura.component';
import { ListarFacturasComponent } from './src/app/listar-facturas/listar-facturas.component';
import { EditarFacturaComponent } from './src/app/editar-factura/editar-factura.component';
import { ImagesComponent } from './src/app/images/images.component';

const routes: Routes = [
  { path: "imagenes", component: ImagesComponent },
  { path: "facturas", component: ListarFacturasComponent },
  { path: "facturas/agregar", component: AgregarFacturaComponent },
  { path: "facturas/editar/:id", component: EditarFacturaComponent },
  { path: "", redirectTo: "/facturas", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/facturas" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }