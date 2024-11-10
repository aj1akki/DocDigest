import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './core/component/login/login.component';
import { SigninOidcComponent } from './core/component/signin-oidc/signin-oidc.component';

const routes: Routes = [
  { path: '', component:LoginComponent }, 
  { path: 'signin-oidc', component: SigninOidcComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('../app/components/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
