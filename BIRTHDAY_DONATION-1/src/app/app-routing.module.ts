import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutThisWebsiteComponent } from './pages/about-this-website/about-this-website.component';
import { CONTACTUSComponent } from './pages/contact-us/contact-us.component';
import { DonationComponent } from './pages/donation/donation.component';
import { FAQComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/register/signup.component';
import { MydonationComponent } from './pages/mydonation/mydonation.component';
import { MytransactionsComponent } from './pages/mytransactions/mytransactions.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about_this_website',component:AboutThisWebsiteComponent},
  {path:'donation',component:DonationComponent},
  {path:'faq',component:FAQComponent},
  {path:'contact-us',component:CONTACTUSComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:MyprofileComponent},
  {path:'mydonation',component:MydonationComponent},
  {path:'transactions',component:MytransactionsComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
