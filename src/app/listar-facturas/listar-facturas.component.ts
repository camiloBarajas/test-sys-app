import { Component, OnInit } from '@angular/core';
import { FacturasService } from "../facturas.service"
import { Factura } from "../factura"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-facturas',
  templateUrl: './listar-facturas.component.html',
  styleUrls: ['./listar-facturas.component.scss']
})
export class ListarFacturasComponent implements OnInit {
  private facturas: Factura[] = [
    new Factura(52654, 554546, 20)
  ];

  constructor(private facturasService: FacturasService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarFactura(factura: Factura) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${factura.numero}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.facturasService
          .deleteFactura(factura)
          .subscribe(() => {
            this.obtenerFacturas();
            this.snackBar.open('Factura eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }
  
  ngOnInit(): void {
    this.obtenerFacturas();
  }

  obtenerFacturas() {
    return this.facturasService
      .getMascotas()
      .subscribe((facturas: Factura[]) => this.facturas = facturas);
  }

}
