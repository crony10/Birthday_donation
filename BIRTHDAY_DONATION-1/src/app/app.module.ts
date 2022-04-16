import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './sharepage/navigation/navigation.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DonationComponent } from './pages/donation/donation.component';
import { FAQComponent } from './pages/faq/faq.component';
import { CONTACTUSComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/signup/login/login.component';
import { AboutThisWebsiteComponent } from './pages/about-this-website/about-this-website.component';
import { SignupComponent } from './pages/signup/login/signup/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
