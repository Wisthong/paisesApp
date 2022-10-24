import { Component, Input, OnInit } from '@angular/core';
import { Country } from '@modules/pais/interface/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css'],
})
export class PaisTablaComponent implements OnInit {
  @Input() listCountry: Country[] = [];
  constructor() {}

  ngOnInit(): void {}
}
