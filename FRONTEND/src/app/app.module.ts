import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAProgramaComponent } from './components/logo-aprograma/logo-aprograma.component';
import { RedsocialComponent } from './components/redsocial/redsocial.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciapComponent } from './components/experienciap/experienciap.component';
import { EducacionyComponent } from './components/educaciony/educaciony.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardandsoftskillsComponent } from './components/hardandsoftskills/hardandsoftskills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAProgramaComponent,
    RedsocialComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciapComponent,
    EducacionyComponent,
    HardandsoftskillsComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({ }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
