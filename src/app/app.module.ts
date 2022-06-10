import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationComponent} from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {ExperienceComponent} from './experience/experience.component';
import {CommonModule} from "@angular/common";
import {EducationComponent} from './education/education.component';
import {ProjectComponent} from './project/project.component';
import {ProjectHolderComponent} from './project/project-holder/project-holder.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ReflectiveJournalComponent } from './reflective-journal/reflective-journal.component';
import { CareerDevelopmentPlanComponent } from './career-development-plan/career-development-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    AboutmeComponent,
    NavigationComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectComponent,
    ProjectHolderComponent,
    ReflectiveJournalComponent,
    CareerDevelopmentPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
