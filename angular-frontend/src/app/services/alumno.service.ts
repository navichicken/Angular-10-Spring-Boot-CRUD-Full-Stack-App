import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Alumno } from './../domain/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseURL = "http://localhost:8080/api/v1/alumnos";

  constructor(private httpClient: HttpClient) { }
  
  getAlumnoList(): Observable<Alumno[]>{
    return this.httpClient.get<Alumno[]>(`${this.baseURL}`);
  }

  createAlumno(alumno: Alumno): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, alumno);
  }

  getAlumnoById(id: number): Observable<Alumno>{
    return this.httpClient.get<Alumno>(`${this.baseURL}/${id}`);
  }

  updateAlumno(id: number, alumno: Alumno): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, alumno);
  }

  deleteAlumno(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
