import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuperheroApiServiceService { 
  private imageApiUrl ='image';
  private superHeroApiKey = '';
  private superHeroBaseUrl = 'https://www.superheroapi.com/api.php';

  constructor( private http: HttpClient) { }

/** GET hero by id. Will 404 if id not found */
getSuperHeroId(id: number): Observable<SuperheroImage> {
  const url = `${this.superHeroBaseUrl}/${this.superHeroApiKey}/${id}/${this.imageApiUrl}`;
  return this.http.get<SuperheroImage>(url).pipe(
    tap(_ => console.log(`updated hero id=${id}`))) ;
  }
  getSuperHeroDetails(id: number): Observable<any> {
    const url = `${this.superHeroBaseUrl}/${this.superHeroApiKey}/${id} `;
    return this.http.get<SuperheroImage>(url).pipe(
      tap(_ => console.log(`updated hero id=${id}`))) ;
    }
getSuperHeroByName(search: string): Observable<any> {
  const url = `${this.superHeroBaseUrl}/${this.superHeroApiKey}/search/${search}`;
  return this.http.get(url).pipe(
    tap(_ => console.log(`searched for hero =${search}`)));
  }  
}
 
export interface SuperheroImage {
  response:string,
  id: number;
  name: string;
  url : string;
}




