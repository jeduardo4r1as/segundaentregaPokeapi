import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
 urlApi='https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }



  ObtenerListadoPokemones(){
    return this.http.get(this.urlApi)
  }

  obtenerUnPokemon(url:string){
    return this.http.get(url)
  }

  nextPage (nextPageUrl: string) {
    return this.http.get(nextPageUrl);
  }


}
