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
import { MatTabsModule } from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MyprofileComponent } from './pages/user/myprofile/myprofile.component';
import { MydonationComponent } from './pages/user/mydonation/mydonation.component';
import { MytransactionsComponent } from './pages/user/mytransactions/mytransactions.component';
import { AdminComponent } from './pages/admin/admin.component';

import { EditdonationadminComponent } from './pages/admin/editdonationadmin/editdonationadmin.component';
import { MyprofileadminComponent } from './pages/admin/myprofileadmin/myprofileadmin.component';
import { UserComponent } from './pages/user/user.component';

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
    MyprofileComponent,
    MydonationComponent,
    MytransactionsComponent,
    AdminComponent,
    EditdonationadminComponent,
    MyprofileadminComponent,
    UserComponent,

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
