import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestsalesComponent } from './bestsales/bestsales.component';
import { BakingComponent } from './categories/baking/baking.component';
import { CategoriesComponent } from './categories/categories.component';
import { CleaningmaterialsComponent } from './categories/cleaningmaterials/cleaningmaterials.component';
import { DessertsComponent } from './categories/desserts/desserts.component';
import { FruitsComponent } from './categories/fruits/fruits.component';
import { VegetablesComponent } from './categories/vegetables/vegetables.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { MycartComponent } from './mycart/mycart.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { OffersComponent } from './offers/offers.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonalbabycareComponent } from './personalbabycare/personalbabycare.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SigninComponent } from './signin/signin.component';
import { SingoutComponent } from './singout/singout.component';
import { StaplespackegedfoodComponent } from './staplespackegedfood/staplespackegedfood.component';

const routes: Routes = [
  {path:'categories',component:CategoriesComponent,children:[
    {path:'fruits',component:FruitsComponent},
    {path:'vegetables',component:VegetablesComponent},
    {path:'desserts',component:DessertsComponent},
    {path:'cleaningmaterials',component:CleaningmaterialsComponent},
    {path:'baking',component:BakingComponent}
  ]},
  {path:'contactus',component:ContactusComponent},
  {path:'mycart',component:MycartComponent},
  {path:'newproducts',component:NewproductsComponent},
  {path:'offers',component:OffersComponent},
  {path:'staplespackegedfood',component:StaplespackegedfoodComponent},
  {path:'personalbabycare',component:PersonalbabycareComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'signin',component:SigninComponent},
  {path:'singout',component:SingoutComponent},
  {path:'bestsales',component:BestsalesComponent},
  {path:'',redirectTo:'categories',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent},
  {path:'footer',component:FooterComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
