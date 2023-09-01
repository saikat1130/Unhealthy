import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ListcategoryComponent } from './listcategory/listcategory.component'
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component'
import { EditcatComponent } from './editcat/editcat.component';
import { LoginComponent } from './login/login.component';
import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {path: "dashboard", component:DashboardComponent, canActivate: [ExpenseGuard]},
  {path: "header", component:HeaderComponent},
  {path: "sidebar", component:SidebarComponent},
  {path: "footer", component:FooterComponent},
  {path: "add-category", component:AddcategoryComponent, canActivate: [ExpenseGuard]},
  {path: "list-category", component:ListcategoryComponent, canActivate: [ExpenseGuard]},
  {path: "list-product", component:ListproductComponent, canActivate: [ExpenseGuard]},
  {path: "add-product", component:AddproductComponent, canActivate: [ExpenseGuard]},
  {path: "edit-cat/:id", component:EditcatComponent, canActivate: [ExpenseGuard]},
  {path: "login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
