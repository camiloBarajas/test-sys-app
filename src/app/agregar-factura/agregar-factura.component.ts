import { Component, OnInit } from '@angular/core';
import { Factura } from '../factura';
import { FacturasService } from "../facturas.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-factura',
  templateUrl: './agregar-factura.component.html',
  styleUrls: ['./agregar-factura.component.scss']
})
export class AgregarFacturaComponent implements OnInit {

  constructor(private facturasService: FacturasService,
    private snackBar: MatSnackBar,
    private router: Router,) { }

  ngOnInit(): void {
  }
  facturaModel = new Factura("", "", undefined)

  onSubmit() {
    this.facturasService.addFactura(this.facturaModel).subscribe(() => {
      this.snackBar.open('Factura guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/facturas']);
    })
  }

}
