import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacUsComponent } from './Components/contac-us/contac-us.component';
import { FAQComponent } from './Components/faq/faq.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { PurchasingProcessComponent } from './Components/purchasing-process/purchasing-process.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: 'Contactanos', component: ContacUsComponent },
  { path: 'ProductLists', component: ProductFilterComponent },
  { path: 'ProductOverviews', component: ProductDetailsComponent },
  {path: 'Pagos', component: PurchasingProcessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
