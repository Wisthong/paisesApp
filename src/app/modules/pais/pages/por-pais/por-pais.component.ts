import { Component } from '@angular/core';
import { Country } from '@modules/pais/interface/pais.interface';
import { PaisService } from '@modules/pais/services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  busqueda!: string;
  bandera: boolean = false;
  mostrarSugeridos: boolean = false;
  listCountry: Country[] = [];
  listCountrySugeridos: Country[] = [];

  constructor(private readonly paisSvc: PaisService) {}

  onBuscar(busqueda: string) {
    this.mostrarSugeridos = false;
    if (busqueda !== null) {
      this.busqueda = busqueda;
      this.bandera = false;
      this.paisSvc.buscarPais(busqueda).subscribe(
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
    this.bandera = false;
    this.busqueda = valor;
    this.mostrarSugeridos = true;
    this.paisSvc.buscarPais(valor).subscribe(
      (resOk) => {
        this.listCountrySugeridos = resOk.slice(0, 8);
      },
      (resFail) => {
        this.listCountrySugeridos = [];
        // this.mostrarSugeridos = false;
      }
    );
  }

  onBuscarSugerido(busqueda: string) {
    this.onBuscar(busqueda);
  }
}
