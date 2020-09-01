import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material';
import { MatIconModule} from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarFacturaComponent } from './agregar-factura/agregar-factura.component';
import { ListarFacturasComponent } from './listar-facturas/listar-facturas.component';
import { EditarFacturaComponent } from './editar-factura/editar-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarFacturaComponent,
    ListarFacturasComponent,
    EditarFacturaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
