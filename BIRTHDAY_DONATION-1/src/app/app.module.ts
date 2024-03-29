import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './sharepage/navigation/navigation.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DonationComponent } from './pages/donation/donation.component';
import { FAQComponent } from './pages/faq/faq.component';
import { CONTACTUSComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutThisWebsiteComponent } from './pages/about-this-website/about-this-website.component';
import { SignupComponent } from './auth/register/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './pages/profile_pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/profile_pages/user-page/user-page.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';

// angular material imports
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [

    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    DonationComponent,
    FAQComponent,
    CONTACTUSComponent,
    LoginComponent,
    AboutThisWebsiteComponent,
    SignupComponent,
    AdminPageComponent,
    UserPageComponent,
    AdminLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatExpansionModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
