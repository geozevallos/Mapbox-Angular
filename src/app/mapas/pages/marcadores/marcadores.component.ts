import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

interface MarcadorColor {
  color: string;
  marker: mapboxgl.Marker
}


@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container{
    width: 100%;
  height: 100%;
  }
  
  .list-group{
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 99;
  }
  
  li{
    cursor: pointer
  }`
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map
  zoomLevel: number = 14
  center: [number, number] = [-76.98063336836606, -12.15059468546376]

  // Arreglo de marcadores
  // marcadores: mapboxgl.Marker[] = []
  marcadores: MarcadorColor[] = []

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    // Marcador como HTML
    // const markerHtml: HTMLElement = document.createElement('div')
    // markerHtml.innerHTML = "Holaaa"

    //  new mapboxgl.Marker({
    //    element: markerHtml
    //  })
    // .setLngLat(this.center)
    // .addTo(this.mapa)


    // Marcador Hardcodeado
    // const marker = new mapboxgl.Marker()
    // .setLngLat(this.center)
    // .addTo(this.mapa)


  }

  agregarMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.center)
      .addTo(this.mapa)

      // this.marcadores.push(nuevoMarcador);
      this.marcadores.push({
        color,
        marker: nuevoMarcador
      })
  }

  irMarcador(){

    // this.mapa.flyTo()
  }


}
