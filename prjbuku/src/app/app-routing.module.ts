import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
  path : 'admin',
  component : AdminComponent,
  children :[
    {
      path: '',
       component : DashboardComponent
    }

  ]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
