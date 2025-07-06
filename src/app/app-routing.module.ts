import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { FoundationComponent } from './foundation/foundation.component';
import { IntervyuComponent } from './intervyu/intervyu.component';
import { HirehubComponent } from './hirehub/hirehub.component';
import { ResumeComponent } from './foundation/resume/resume.component';
import { CoverLetterComponent } from './foundation/cover-letter/cover-letter.component';
import { AptitudeComponent } from './intervyu/aptitude/aptitude.component';
import { TechnicalRoundComponent } from './intervyu/technical-round/technical-round.component';
import { HrRoundComponent } from './intervyu/hr-round/hr-round.component';
import { GroupDiscussionComponent } from './intervyu/group-discussion/group-discussion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { McqComponent } from './intervyu/mcq/mcq.component';

const routes: Routes = [
  { path: '',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent},
  { path: 'user', component: UserComponent, canActivate:[AuthGuard]},
  { path: 'roadmap', component: RoadmapComponent, canActivate:[AuthGuard]},
  { path: 'foundation', component: FoundationComponent, canActivate:[AuthGuard]},
  { path: 'foundation/resume', component: ResumeComponent, canActivate:[AuthGuard]},
  { path: 'foundation/cover-letter', component: CoverLetterComponent, canActivate:[AuthGuard]},

  { path: 'intervyu', component: IntervyuComponent, canActivate:[AuthGuard]},
  { path: 'intervyu/apptitude', component: AptitudeComponent, canActivate:[AuthGuard]},
  { path: 'intervyu/group-discussion', component: GroupDiscussionComponent, canActivate:[AuthGuard]},
  { path: 'intervyu/technical-round', component: TechnicalRoundComponent, canActivate:[AuthGuard]},
  { path: 'intervyu/hr-round', component: HrRoundComponent, canActivate:[AuthGuard]},
  { path: 'intervyu/mcqs', component: McqComponent, canActivate:[AuthGuard]},


  { path: 'hirehub', component: HirehubComponent, canActivate:[AuthGuard]},
  
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
