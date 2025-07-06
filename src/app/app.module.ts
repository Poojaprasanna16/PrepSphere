import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

import { RoadmapComponent } from './roadmap/roadmap.component';
import { FoundationComponent } from './foundation/foundation.component';
import { IntervyuComponent } from './intervyu/intervyu.component';
import { HirehubComponent } from './hirehub/hirehub.component';
import { ResumeComponent } from './foundation/resume/resume.component';
import { CoverLetterComponent } from './foundation/cover-letter/cover-letter.component';
import { AptitudeComponent } from './intervyu/aptitude/aptitude.component';
import { GroupDiscussionComponent } from './intervyu/group-discussion/group-discussion.component';
import { TechnicalRoundComponent } from './intervyu/technical-round/technical-round.component';
import { HrRoundComponent } from './intervyu/hr-round/hr-round.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { McqComponent } from './intervyu/mcq/mcq.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    RoadmapComponent,
    FoundationComponent,
    IntervyuComponent,
    HirehubComponent,
    ResumeComponent,
    CoverLetterComponent,
    AptitudeComponent,
    GroupDiscussionComponent,
    TechnicalRoundComponent,
    HrRoundComponent,
    PageNotFoundComponent,
    McqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
