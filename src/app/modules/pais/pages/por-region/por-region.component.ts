import { Component } from '@angular/core';
import { Country } from '@modules/pais/interface/pais.interface';
import { PaisService } from '@modules/pais/services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  listCountry: Country[] = [];
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva!: string;

  constructor(private readonly paisSvc: PaisService) {}

  onActivarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.listCountry = [];
    this.paisSvc.buscarRegion(region).subscribe((resOk) => {
      this.listCountry = resOk;
    });
  }
}
