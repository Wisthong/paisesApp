import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '@modules/pais/interface/pais.interface';
import { PaisService } from '@modules/pais/services/pais.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly paisSvc: PaisService
  ) {}

  ngOnInit(): void {
    //TODO: Uso de switchMap, que

    this.route.params
      .pipe(switchMap(({ id }) => this.paisSvc.getPaisPorCode(id)))
      .subscribe((resOk) => {
        this.pais = resOk;
      });
  }
}
