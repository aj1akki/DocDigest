import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Optional: Redirect to dashboard on root path
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  {
    path: 'dashboard',
    loadChildren: () => import('../app/components/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
