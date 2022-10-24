import { Component, OnInit } from '@angular/core';
import { Country } from '@modules/pais/interface/pais.interface';
import { PaisService } from '@modules/pais/services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  bandera: boolean = false;
  listCountry: Country[] = [];

  constructor(private readonly paisSvc: PaisService) {}

  onBuscar(busqueda: string) {
    if (busqueda !== null) {
      this.bandera = false;
      this.paisSvc.buscarCapital(busqueda).subscribe(
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
