import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PdfUploaderComponent } from './pdf-uploader/pdf-uploader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from 'app/core/interceptors/auth.interceptor';
import { PdfUploaderService } from './pdf-uploader/service/pdf-uploader.service';

const routes: Routes = [
  { path: '', component: PdfUploaderComponent }, // Default route for the dashboard
];
@NgModule({
  declarations: [PdfUploaderComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    PdfUploaderService

  ],
})
export class DashboardModule {}
