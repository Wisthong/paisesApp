import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private readonly apiUrl: string = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}

  //TODO: Metodo para buscar el pais
  buscarPais(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + '/name/' + name);
  }

  buscarCapital(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + '/capital/' + name);
  }

  getPaisPorCode(name: string): Observable<Country> {
    return this.http.get<Country>(this.apiUrl + '/alpha/' + name).pipe(
      map((data : any) => {
        return data[0];
      })
    );
  }
}
