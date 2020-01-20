import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { FoundationboardComponent } from './foundationboard/foundationboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyComponent } from './property/property.component';
import { LoginComponent } from './login/login.component';
import { LoginmodeComponent } from './loginmode/loginmode.component';
import { SignupComponent } from './signup/signup.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { PropertyinnerComponent } from './propertyinner/propertyinner.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { Ng5SliderModule } from 'ng5-slider';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomepageComponent,
    AboutComponent,
    ContactusComponent,
    PrivacypolicyComponent,
    TermsconditionComponent,
    FoundationboardComponent,
    PropertyComponent,
    LoginComponent,
    LoginmodeComponent,
    SignupComponent,
    BookmarkComponent,
    PropertyinnerComponent,
    ContactinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OwlModule,
    Ng5SliderModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
