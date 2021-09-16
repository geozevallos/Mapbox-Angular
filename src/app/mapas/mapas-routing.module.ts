import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScrenComponent } from './pages/full-scren/full-scren.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropierdadesComponent } from './pages/propierdades/propierdades.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fullscreen', component: FullScrenComponent
      },
      {
        path: 'zoom-range', component: ZoomRangeComponent
      },
      {
        path: 'marcadores', component: MarcadoresComponent
      },
      {
        path: 'propiedades', component: PropierdadesComponent
      },
      {
        path: '**', redirectTo: 'fullscreen'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
