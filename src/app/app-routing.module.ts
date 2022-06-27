import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OperatorMapComponent } from './components/operators/operator-map/operator-map.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: OperatorMapComponent, path: 'map' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
