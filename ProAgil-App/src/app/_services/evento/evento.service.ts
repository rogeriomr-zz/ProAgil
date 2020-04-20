import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../../_models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  baseURL = 'http://localhost:5000/api/evento';

constructor(private http: HttpClient) {}

getAllEventos(): Observable<Evento[]> {
  return this.http.get<Evento[]>(this.baseURL);
}

getEventosByTema(tema: string): Observable<Evento[]> {
  return this.http.get<Evento[]>(`${this.baseURL}/getByTema/${tema}`);
}

getEventoById(id: number): Observable<Evento> {
  return this.http.get<Evento>(`${this.baseURL}/${id}`);
}

postImagem(file: File, name: string) {
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  const fileToUpload = <File> file[0];
  const image = new FormData();
  image.append('image', fileToUpload, name);

  return this.http.post(`${this.baseURL}/uploads`, image);
}

postEvento(evento: Evento) {
  return this.http.post(this.baseURL, evento);
}

putEvento(evento: Evento) {
  return this.http.put(`${this.baseURL}/${evento.id}`, evento);
}

delEvento(id: number) {
  return this.http.delete(`${this.baseURL}/${id}`);
}

}
