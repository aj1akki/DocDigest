import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PdfUploaderComponent } from './pdf-uploader/pdf-uploader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AbstractHttpService } from 'app/core/services/http/abstract-http.service';
import { PdfUploaderService } from './pdf-uploader/service/pdf-uploader.service';


const routes: Routes = [
  { path: '', component: PdfUploaderComponent } // Default route for the dashboard
];
@NgModule({
  declarations: [
    PdfUploaderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PdfUploaderService],

})
export class DashboardModule { }
