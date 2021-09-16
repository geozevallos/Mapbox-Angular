import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScrenComponent } from './pages/full-scren/full-scren.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropierdadesComponent } from './pages/propierdades/propierdades.component';


@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScrenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropierdadesComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
