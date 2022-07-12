import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutThisWebsiteComponent } from './pages/about-this-website/about-this-website.component';
import { CONTACTUSComponent } from './pages/contact-us/contact-us.component';
import { DonationComponent } from './pages/donation/donation.component';
import { FAQComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/register/signup.component';
import { UserPageComponent } from './pages/profile_pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/profile_pages/admin-page/admin-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about_this_website',component:AboutThisWebsiteComponent},
  {path:'donation',component:DonationComponent},
  {path:'faq',component:FAQComponent},
  {path:'contact-us',component:CONTACTUSComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:UserPageComponent},
  {path:'admin',component:AdminPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
