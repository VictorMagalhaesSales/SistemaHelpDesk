import { AuthGuard } from './components/security/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent}
] 

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
