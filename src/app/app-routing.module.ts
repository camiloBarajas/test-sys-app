import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarFacturaComponent } from './agregar-factura/agregar-factura.component';
import { ListarFacturasComponent } from './listar-facturas/listar-facturas.component';
import { EditarFacturaComponent } from './editar-factura/editar-factura.component';
import { ImagesComponent } from './images/images.component';


const routes: Routes = [
 
  { path: "facturas", component: ListarFacturasComponent },
  { path: "imagenes", component: ImagesComponent },
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
