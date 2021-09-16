import { Component, OnInit } from '@angular/core';

// Para importar lo de js como angular
import * as mapboxgl from 'mapbox-gl'
import { environment } from '../../../../environments/environment';

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

    (mapboxgl as any).accessToken = environment.mapboxToken;
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

}
