import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'post/:id', component: PostComponent},
  // {path: 'home', component: HomeComponent},
  {
    path: 'add-post', 
    component: AddPostComponent, 
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
