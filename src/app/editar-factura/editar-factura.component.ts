import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacturasService } from "facturas.service"
import { Factura } from 'factura';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-factura',
  templateUrl: './editar-factura.component.html',
  styleUrls: ['./editar-factura.component.scss']
})
export class EditarFacturaComponent implements OnInit {

  private factura: Factura = new Factura(0, 0, 0, 0 , 65);

  constructor(private route: ActivatedRoute,
    private router: Router, private facturasService: FacturasService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let idFactura = this.route.snapshot.paramMap.get("id");
    this.facturasService.getFactura(idFactura).subscribe((factura: Factura) => this.factura = factura)
  }

  volver() {
    this.router.navigate(['/facturas']);
  }

  onSubmit() {
    this.facturasService.updateFactura(this.factura).subscribe(() => {
      this.snackBar.open('Factura actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
