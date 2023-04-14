import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/enviroment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiciosMarvelService {

  //recuperacion de las variables de entorno pora la coneccion y consumo de la api
  PUBLIC_KEY = environment.public_key;
  HASH = environment.hash; 

  URL_API = environment.marvel_url;

  constructor(private http: HttpClient) { }

//metodo para recuperar a todos los personajes 

  getAllPersonajes(): Observable<any> {
    return this.http.get<any>
    (`${this.URL_API}/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
    .pipe(map((data:any)=>data.data.results));
    }

  //metodo para recuperar un personaje por id 

    getPersonaje(id: string):Observable<any>{

      return this.http.get
      (`${this.URL_API}/characters/${id}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(map((data:any)=>data.data.results));
  
    }

    //metodo para recuperar a todos los comics
  
    getAllComics():Observable<any>{
  
      return this.http.get<any>
      (`${this.URL_API}/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(map((data:any)=>data.data.results));
  
    }
  
  //metodo para recuperar un comic por id 
  
    getComic(id: string):Observable<any>{
  
      return this.http.get
      (`${this.URL_API}/comics/${id}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(map((data:any)=>data.data.results));
  
    }
  
  
}
