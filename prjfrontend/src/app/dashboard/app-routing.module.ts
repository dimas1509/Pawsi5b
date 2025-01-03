import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "../admin/admin.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
    {
        path : 'admin',
        component : AdminComponent,
        children :[
            {
                path : '',
                component : DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }