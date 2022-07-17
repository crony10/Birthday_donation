import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutThisWebsiteComponent } from './pages/about-this-website/about-this-website.component';
import { CONTACTUSComponent } from './pages/contact-us/contact-us.component';
import { DonationComponent } from './pages/donation/donation.component';
import { FAQComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/register/signup.component';
import { MydonationComponent } from './pages/user/mydonation/mydonation.component';
import { MytransactionsComponent } from './pages/user/mytransactions/mytransactions.component';
import { MyprofileComponent } from './pages/user/myprofile/myprofile.component';
import { MyprofileadminComponent } from './pages/admin/myprofileadmin/myprofileadmin.component';
import { EditdonationadminComponent } from './pages/admin/editdonationadmin/editdonationadmin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about_this_website',component:AboutThisWebsiteComponent},
  {path:'donation',component:DonationComponent},
  {path:'faq',component:FAQComponent},
  {path:'contact-us',component:CONTACTUSComponent},
  {path:'login',component:LoginComponent},
  {path:'profileuser',component:MyprofileComponent},
  {path:'mydonationuser',component:MydonationComponent},
  {path:'transactionsuser',component:MytransactionsComponent},
  {path:'signup',component:SignupComponent},
  {path:'profileadmin',component:MyprofileadminComponent},
  {path:'editdonationadmin',component:EditdonationadminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
