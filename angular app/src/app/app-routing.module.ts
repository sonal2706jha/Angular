import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
// ROUTES
const appRoutes: Routes = [
    
    { path: '', redirectTo: 'product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent },
    {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }