import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [ `
  .mapa-container{
    width: 100%;
  height: 100%;
  }
  
  .row{
    background-color: white;
    border-radius: 5px;
    bottom: 60px;
    left: 50px;
    padding:10px;
    position: fixed;
    z-index: 999;
    width: 400px
  }`
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map
  zoomLevel: number = 10
  center: [number, number] = [-76.98063336836606, -12.15059468546376]

  constructor() { 
    
  }

  // Siempre q hay un on se debe destruir
  ngOnDestroy():void{
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});

  }

  ngAfterViewInit(): void {
    
    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });


    this.mapa.on('zoom', (evt) => {
      // console.log(evt);
      // const zoomActual = this.mapa.getZoom();
      this.zoomLevel = this.mapa.getZoom();
    })


    this.mapa.on('zoomend', (evt) => {
      // console.log(evt);
      // const zoomActual = this.mapa.getZoom();
      if(this.mapa.getZoom() > 18){
        this.mapa.zoomTo(18)
      }
    })

    // Movimiento del mapa
    this.mapa.on('move', (e) => {
      // console.log(e);
      const target = e.target;
      const {lng, lat} = target.getCenter();
    this.center = [lng, lat]
      
    })
  }

  zoomCambio(value:any){
    console.log(value);
    this.mapa.setZoom(value)
    this.zoomLevel=value
    
  }

  zoomIn(){
    this.mapa.zoomIn()
    console.log(this.mapa.getZoom());
    
    // this.zoomLevel = this.mapa.getZoom()
  }

  zoomOut(){
    this.mapa.zoomOut();
    // this.zoomLevel = this.mapa.getZoom()
  }

  

}
