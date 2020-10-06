import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent  } from './app.component';
import { HomeComponent } from './home/home.component';
//import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChildComponent } from './child/child.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { SelectedProductPipe } from './pipes/selected-product.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    ProductListComponent,
    ProductDetailsComponent,
    SelectedProductPipe,
    UserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
