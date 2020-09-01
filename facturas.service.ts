import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from "./factura"
import { environment } from "./src/environments/environment"
@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getFacturas() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getFactura(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idFactura=${id}`);
  }

  addFactura(factura: Factura) {
    return this.http.post(`${this.baseUrl}/post.php`, factura);
  }

  deleteFactura(factura: Factura) {
    return this.http.delete(`${this.baseUrl}/delete.php?idFactura=${factura.id}`);
  }

  updateFactura(factura: Factura) {
    return this.http.put(`${this.baseUrl}/update.php`, factura);
  }
}