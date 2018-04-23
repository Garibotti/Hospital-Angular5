import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MedicoComponent } from './medico/medico.component';
import { EnfermeiraComponent } from './enfermeira/enfermeira.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { EnfermeiraGuard } from './guards/enfermeira.guard';
import { MedicoGuard } from './guards/medico.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'medico', component: MedicoComponent, canActivate: [AuthGuard, MedicoGuard] },
 	{ path: 'enfermeira', component: EnfermeiraComponent, canActivate: [AuthGuard, EnfermeiraGuard] },
 	{ path: '', component: EnfermeiraComponent, canActivate: [AuthGuard, EnfermeiraGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
