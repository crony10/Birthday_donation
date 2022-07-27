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
import { TempComponent } from './sharepage/temp/temp.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about_this_website',component:AboutThisWebsiteComponent},
  {path:'donation',component:DonationComponent},
  {path:'faq',component:FAQComponent},
  {path:'contact-us',component:CONTACTUSComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:UserPageComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminPageComponent,canActivate:[AuthGuard]},
  {path:'temp',component:TempComponent},
  {path:'admin_login',component:AdminLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
