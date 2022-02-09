import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { COMPOSITION_BUFFER_MODE, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SgcncOutletDirective } from './directive/sgcnc.outlet.directive';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { MainComponent } from './main/main.component';
import { MdiComponent } from './mdi/mdi.component';
import { MenuFiveComponent } from './menu/menu-five/menu-five.component';
import { MenuFourComponent } from './menu/menu-four/menu-four.component';
import { MenuOneComponent } from './menu/menu-one/menu-one.component';
import { MenuThreeComponent } from './menu/menu-three/menu-three.component';
import { MenuTwoComponent } from './menu/menu-two/menu-two.component';
import { CommonService } from './service/common.service';
import { ComponentFactoryService } from './service/component-factory.service';
import { HttpService } from './service/http.service';
import { MdiService } from './service/mdi.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    LeftComponent,
    MenuOneComponent,
    MenuTwoComponent,
    MenuThreeComponent,
    MenuFourComponent,
    MenuFiveComponent,
    MdiComponent,
    SgcncOutletDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: COMPOSITION_BUFFER_MODE, useValue: false}, ComponentFactoryService, MdiService, CommonService, HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
