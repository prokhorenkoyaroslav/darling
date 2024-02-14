import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }

  private url: string = "http://localhost:8080/api/v1/photo"
  private token:string = "Authorization"

  downloadFile(category: string): Observable<HttpResponse<Blob>> {
    const headers = this.getHeaders()
    return this.httpClient.post(this.url, category, {observe: 'response', responseType: 'blob', headers});
  }

  private getHeaders(): HttpHeaders {
    const authToken = localStorage.getItem(this.token);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`
    });
  }
}

