export class Factura {
    constructor(
        public numero_doc: number,
        public codigo_estado: number,
        public valor_fac: number,
        public fecha_fac: number,
        public id?: number,
    ) { }

}