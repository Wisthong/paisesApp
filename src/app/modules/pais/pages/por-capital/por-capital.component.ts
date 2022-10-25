import { Component, OnInit } from '@angular/core';
import { Country } from '@modules/pais/interface/pais.interface';
import { PaisService } from '@modules/pais/services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  busqueda!: string;
  bandera: boolean = false;
  mostrarSugeridos: boolean = false;
  listCountry: Country[] = [];
  listCountrySugeridos: Country[] = [];

  constructor(private readonly paisSvc: PaisService) {}

  onBuscar(busqueda: string) {
    if (busqueda !== null) {
      this.mostrarSugeridos = false;
      busqueda = this.busqueda;
      this.bandera = false;
      this.paisSvc.buscarCapital(busqueda).subscribe(
        (resOk) => {
          this.listCountry = resOk;
        },
        (resFail) => {
          this.bandera = true;
          this.listCountry = [];
        }
      );
    }
  }

  onSugerencias(valor: string) {
    this.busqueda = valor;
    this.bandera = false;
    this.mostrarSugeridos = true;
    this.paisSvc.buscarCapital(valor).subscribe(
      (resOk) => {
        this.listCountrySugeridos = resOk.slice(0, 8);
      },
      (resFail) => {
        this.listCountrySugeridos = [];
        this.mostrarSugeridos = false;
      }
    );
  }

  onBuscarSugerido(valor: string) {
    this.onBuscar(valor);
  }
}
