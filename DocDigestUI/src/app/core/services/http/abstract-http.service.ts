import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractHttpService<T> {
  protected baseUrl: string = environment.apiBaseUrl;  // Load the base URL from environment config

  constructor(protected http: HttpClient) {}

  // Generic GET method
  get(endpoint: string, params?: any): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${endpoint}`, { params });
  }

  // Generic GET by ID
  getById(endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`);
  }

  // Generic POST method
  post(endpoint: string, body: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  // Generic PUT method
  put(endpoint: string, id: number | string, body: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}/${id}`, body);
  }

  // Generic DELETE method
  delete(endpoint: string, id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${endpoint}/${id}`);
  }
}
