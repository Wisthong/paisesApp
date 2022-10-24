import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map, tap } from 'rxjs';
import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private readonly apiUrl: string = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}

  //TODO: Metodo para buscar el pais
  buscarPais(name: string): Observable<Country[]> {
    const params = new HttpParams().set('fields', 'name,population,flags,cca2');
    return this.http
      .get<Country[]>(this.apiUrl + '/name/' + name, { params })
      .pipe(tap(console.log));
  }

  buscarCapital(name: string): Observable<Country[]> {
    const params = new HttpParams().set('fields', 'name,population,flags,cca2');
    return this.http
      .get<Country[]>(this.apiUrl + '/capital/' + name, {
        params,
      })
      .pipe(tap(console.log));
  }

  buscarRegion(name: string): Observable<Country[]> {
    const params = new HttpParams().set('fields', 'name,population,flags,cca2');
    return this.http
      .get<Country[]>(this.apiUrl + '/region/' + name, { params })
      .pipe(tap(console.log));
  }

  getPaisPorCode(name: string): Observable<Country> {
    const params = new HttpParams().set(
      'fields',
      'name,population,flags,cca2,capital,continents,borders,ccn3,translations'
    );
    return this.http
      .get<Country>(this.apiUrl + '/alpha/' + name, { params })
      .pipe(
        tap(console.log)

      );
  }
}
