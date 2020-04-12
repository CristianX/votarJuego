import { Component, OnInit } from '@angular/core';

// Servicios
import { GameService } from '../../services/game.service';

// Interfaz
import { Game } from 'src/app/interfaces/interface';

// SweetAlert 2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  // Llamando interfaz
  juegos: Game[] = [];

  constructor( private gameService: GameService ) { }

  ngOnInit(): void {
    this.gameService.getNominados().subscribe( resp => {
      console.log(resp);
      this.juegos = resp;
    });
  }

  votarJuego( juego: Game ) {
    // console.log(juego);
    // Si se desea el resp se lo puede dejar de tipo any pero tambien se puede dejar con ok y mensaje
    this.gameService.votarJuego( juego.id ).subscribe( ( resp: { ok: boolean, mensaje: string } ) => {
       // console.log(resp); } );
       if ( resp.ok ) {
         // Llamando sweet alert
         Swal.fire( 'Gracias ', resp.mensaje, 'success' );
       }
    });

  }

}
