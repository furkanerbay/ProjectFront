import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './admin/components/home/home.component';

const routes: Routes = [
  {path:"admin",component:LayoutComponent,children:[
    {path:"colors",loadChildren: () => import("./admin/components/color/color.module").then
    (module => module.ColorModule)},
    {path:"",loadChildren: () => import("./admin/components/dashboard/dashboard.module").then
    (module => module.DashboardModule)},
    {path:"province",loadChildren: () => import("./admin/components/province/province.module").then
    (module => module.ProvinceModule)},
    {path:"order",loadChildren: () => import("./admin/components/order/order.module").then
    (module => module.OrderModule)},
    {path:"store",loadChildren: () => import("./admin/components/store/store.module").then
    (module => module.StoreModule)},
    {path:"user",loadChildren: () => import("./admin/components/user/user.module").then
    (module => module.UserModule)},
    {path:"category",loadChildren: () => import("./admin/components/category/category.module").then
    (module => module.CategoryModule)},
    {path:"book",loadChildren: () => import("./admin/components/book/book.module").then
    (module => module.BookModule)}
  ]},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
