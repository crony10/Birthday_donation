import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutThisWebsiteComponent } from './pages/about-this-website/about-this-website.component';
import { CONTACTUSComponent } from './pages/contact-us/contact-us.component';
import { DonationComponent } from './pages/donation/donation.component';
import { FAQComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/register/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about_this_website',component:AboutThisWebsiteComponent},
  {path:'donation',component:DonationComponent},
  {path:'faq',component:FAQComponent},
  {path:'contact-us',component:CONTACTUSComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
