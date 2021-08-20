import { HomeComponent } from './template/home/home.component';
import { AbootComponent } from './template/aboot/aboot.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'game', component : GameCardComponent},
  {path: 'Contact', component : GameCardComponent},
  {path: 'about', component : AbootComponent},
  {path: 'home', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
