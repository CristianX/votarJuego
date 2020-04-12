import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Enviroments
import { environment } from 'src/environments/environment';

// Interfaz
import { Game } from '../interfaces/interface';

// Regresa cualquier cosa como un observable
import { of } from 'rxjs';

import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  // Para que no haga peticiones GET al volver a entrar
  private juegos: Game[] = [];



  constructor( private http: HttpClient ) {}

  getNominados() {

    if ( this.juegos.length > 0 ) {
      console.log('Desde cache');
      // siempre se tiene que regresar un observable
      return of( this.juegos );
    } else {
      console.log('Desde internet');
      // Conviertiendo archivo  a tipo game de la intefaz
      // tab es para que se almacene la data que regresa en la variable juegos
      return this.http.get<Game[]>(`${ environment.url }/api/goty`).pipe( tap( juegos => this.juegos = juegos ) );
    }
  }

  votarJuego( id: string ) {
    return this.http.post( `${ environment.url }/api/goty/${ id }`, {});
  }
}
