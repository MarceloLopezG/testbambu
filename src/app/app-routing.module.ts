import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'news', component: NewsComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  
})
export class AppRoutingModule { }
