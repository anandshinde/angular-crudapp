import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LicenceAgreementComponent } from './Component/licence-agreement/licence-agreement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { HeaderComponent } from './Component/header/header.component';
import { MessagesComponent } from './Component/messages/messages.component';
import { FeaturComponent } from './Component/featur/featur.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LicenceAgreementComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    HeaderComponent,
    MessagesComponent,
    FeaturComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
