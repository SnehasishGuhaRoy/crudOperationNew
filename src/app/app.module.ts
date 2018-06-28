import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      {path:"product",component:ProductComponent},
      {path:"updateProduct/:id",component: UpdateProductComponent}
    ]

    )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
