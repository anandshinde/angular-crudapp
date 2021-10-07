import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LicenceAgreementComponent } from './Component/licence-agreement/licence-agreement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { HeaderComponent } from './Component/header/header.component';
import { MessagesComponent } from './Component/messages/messages.component';
import { FeaturComponent } from './Component/featur/featur.component';


const routes: Routes = [
  { path:"", redirectTo:'',pathMatch:'full'},
  { path:"Header",component:HeaderComponent},
  { path:"Home" ,component:HomeComponent},
  { path:"Contact" ,component:ContactUsComponent},
  { path:"Licence" ,component:LicenceAgreementComponent},
  { path:"Messages" ,component:MessagesComponent},
  { path:"feature", component:FeaturComponent},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
