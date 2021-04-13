import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly ROOT_URL;
  private path = '';
  private activePath = new Subject<string>();

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://restcountries.eu/rest/v2';
   }

   // Return list of countries 
   getCountries(region: string) {
     return this.http.get(`${this.ROOT_URL}/region/${region}`);
   }

   // Return country details
   getDetails(detail: string) {
    return this.http.get(`${this.ROOT_URL}/name/${detail}`);
  }

  // Set current path
  setPath(uri: string) {
    this.path = uri;
    this.activePath.next(this.path);
  }

  // Get current path
  getPath(): Observable<string> {
    return this.activePath.asObservable()
  }
}
