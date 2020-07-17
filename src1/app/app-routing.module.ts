import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { FoundationboardComponent } from './foundationboard/foundationboard.component';
import { PropertyComponent } from './property/property.component';
import { LoginComponent } from './login/login.component';
import { LoginmodeComponent } from './loginmode/loginmode.component';
import { SignupComponent } from './signup/signup.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { PropertyinnerComponent } from './propertyinner/propertyinner.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'aboutus', component: AboutComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'privacypolicy', component: PrivacypolicyComponent},
  { path: 'termscondition', component: TermsconditionComponent},
  { path: 'foundationboard', component: FoundationboardComponent},
  { path: 'property', component: PropertyComponent},
  { path: 'bookmark', component: BookmarkComponent},
  { path: 'propertyinner', component: PropertyinnerComponent},
  { path: 'login', component: LoginComponent,
  children: [
    {
    path:  'loginmode',
    component:  LoginmodeComponent
    },
    {
    path:  'signup',
    component:  SignupComponent
    },
   
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
