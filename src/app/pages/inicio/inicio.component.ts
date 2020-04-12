import { Component, OnInit } from '@angular/core';

// Angular Firestore
import { AngularFirestore } from '@angular/fire/firestore';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

// Interfaces
import { Game } from '../../interfaces/interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor( private db: AngularFirestore ) { }

  ngOnInit() {

    // Llamando base de datos, valuechanges es para estar atento a cualquier cambio
    // El pipe map permite transformar lo que recibo en otra cosa
    // tslint:disable-next-line: max-line-length
    // return resp.map( ({ name, votos }) => ({ name, value: votos }) ) es la restructuracion de datos para extraer name y votos y cambiar el nombre de votos a value
    this.db.collection('goty').valueChanges().pipe( map( ( resp: Game[]) => resp.map( ({ name, votos }) => ({ name, value: votos }) ) ) )
    .subscribe( resp => {
      // console.log(resp);
      // Guardando la data reestructurada en juegos
      this.juegos = resp;
    } );

  }

}


// Reestructuracion
 // return resp.map( ({ name, votos }) => ({ name, value: votos }) ); // Se íuede usar esto
     /* return resp.map ( juego => { // O se puede usar esto
        return {
          name: juego.name,
          value: juego.votos
        };
      } );*/
