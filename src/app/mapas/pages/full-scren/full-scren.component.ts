import { Component, OnInit } from '@angular/core';

// Para importar lo de js como angular
import * as mapboxgl from 'mapbox-gl'


@Component({
  selector: 'app-full-scren',
  templateUrl: './full-scren.component.html',
  styles: [
    `
    #mapa{
      width: 100%;
    height: 100%;
    }`
  ]
})
export class FullScrenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.98063336836606, -12.15059468546376],
      zoom: 14
    });
  }

}
