import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



  
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



//Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ViewsModule } from '../views/views.module';


const appRoutes: Routes = [
  {
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'events', 
    component: EventsComponent 
  },
  {
    path: 'services', 
    component: ServicesComponent 
  },
  {
    path: 'blog', 
    component: BlogComponent 
  },
  {
    path: 'login', 
    component: LoginComponent 
  }
]

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    EventsComponent, 
    ServicesComponent, 
    BlogComponent, 
    LoginComponent, 
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ViewsModule,
    //Material
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent, 
    EventsComponent, 
    ServicesComponent, 
    BlogComponent, 
    LoginComponent, 
    HomeComponent,
  ]
})
export class ComponentsModule { }
