import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy  {

  // Para recibir los datos
  @Input() results: any[] = [];

 /* results: any[] = [
    {
      name: 'Juego 1',
      value: 20
    },
    {
      name: 'Juego 2',
      value: 25
    },
    {
      name: 'Juego 3',
      value: 15
    },
    {
      name: 'Juego 4',
      value: 30
    }
  ]; */


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // Para destruir el ciclo for al cerrar la página
  // intervalo: any;

  constructor() {
    // La documentación de ngx-charts recomienda reemplazar todos los valores del objeto results
   // const newResults = [ ...this.results ];
    // Para llamar en un intervalo de tiempo, 1500 es ese intervalo
   // this.intervalo = setInterval( () => {
     // console.log('tick');
      // tslint:disable-next-line: forin
     // for ( let i in newResults ) {
      //  newResults[i].value = Math.round( Math.random() * 500 );
     // }
     // this.results = [ ...newResults ];
   // }, 1500 );
  }

  onSelect(event) {
    console.log(event);
  }

  // Para destruir el ciclo for cuando se cierre la pantalla
  ngOnDestroy() {
   // clearInterval( this.intervalo );
  }

}
