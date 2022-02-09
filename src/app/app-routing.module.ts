import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuFiveComponent } from './menu/menu-five/menu-five.component';
import { MenuFourComponent } from './menu/menu-four/menu-four.component';
import { MenuOneComponent } from './menu/menu-one/menu-one.component';
import { MenuThreeComponent } from './menu/menu-three/menu-three.component';
import { MenuTwoComponent } from './menu/menu-two/menu-two.component';


export const routes: Routes = [
      { path: '', component: MainComponent },
      { path: 'menu', component: MenuOneComponent, outlet: '1'},
      { path: 'menu', component: MenuTwoComponent, outlet: '2'},
      { path: 'menu', component: MenuThreeComponent, outlet: '3'},
      { path: 'menu', component: MenuFourComponent, outlet: '4'},
      { path: 'menu', component: MenuFiveComponent, outlet: '5'},
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
