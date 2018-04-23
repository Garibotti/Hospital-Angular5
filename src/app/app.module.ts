import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


//components
import { MedicoComponent } from './medico/medico.component';
import { EnfermeiraComponent } from './enfermeira/enfermeira.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { EnfermeiraGuard } from './guards/enfermeira.guard';
import { MedicoGuard } from './guards/medico.guard';
import { AppComponent } from './app.component';

//services
import { HospitalService } from './hospital.service';
import { HHttpInterceptor } from './h-http-interceptor'

//third party components
import { TabsModule } from 'ngx-bootstrap/tabs';



@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    EnfermeiraComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass: HHttpInterceptor, 
      multi: true 
    },
    HospitalService,
    AuthGuard, EnfermeiraGuard, MedicoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
