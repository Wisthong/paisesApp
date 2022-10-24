import { Component } from '@angular/core';
import { Country } from '@modules/pais/interface/pais.interface';
import { PaisService } from '@modules/pais/services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  // busqueda!: string;
  bandera: boolean = false;
  listCountry: Country[] = [];

  constructor(private readonly paisSvc: PaisService) {}

  onBuscar(busqueda: string) {
    if (busqueda !== null) {
      this.bandera = false;
      this.paisSvc.buscarPais(busqueda).subscribe(
        (resOk) => {
          this.listCountry = resOk;
          console.log(resOk);
        },
        (resFail) => {
          this.bandera = true;
          this.listCountry = [];
        }
      );
    }
  }

  onSugerencias(valor: string) {
    this.bandera = false;
    // console.log(valor);
  }
}
