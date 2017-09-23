import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';

const appRouter : Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent },
  {path: 'contact', component: ContactMeComponent}

]  

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(//
      appRouter,
      {enableTracing:true}
    )
  //  NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
