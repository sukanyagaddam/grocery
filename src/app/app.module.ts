import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { BestsalesComponent } from './bestsales/bestsales.component';
import { OffersComponent } from './offers/offers.component';
import { MycartComponent } from './mycart/mycart.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SigninComponent } from './signin/signin.component';
import { FruitsComponent } from './categories/fruits/fruits.component';
import { VegetablesComponent } from './categories/vegetables/vegetables.component';
import { DessertsComponent } from './categories/desserts/desserts.component';
import { BakingComponent } from './categories/baking/baking.component';
import { CleaningmaterialsComponent } from './categories/cleaningmaterials/cleaningmaterials.component';
import { StaplespackegedfoodComponent } from './staplespackegedfood/staplespackegedfood.component';
import { PersonalbabycareComponent } from './personalbabycare/personalbabycare.component';
import { SingoutComponent } from './singout/singout.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NewproductsComponent,
    BestsalesComponent,
    OffersComponent,
    MycartComponent,
    ReviewsComponent,
    ContactusComponent,
    SigninComponent,
    FruitsComponent,
    VegetablesComponent,
    DessertsComponent,
    BakingComponent,
    CleaningmaterialsComponent,
    StaplespackegedfoodComponent,
    PersonalbabycareComponent,
    SingoutComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
