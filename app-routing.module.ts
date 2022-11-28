import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Navbar2Component } from './component/navbar2/navbar2.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RepoComponent } from './component/repo/repo.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'navbar2',component:Navbar2Component},
  {path:'footer',component:FooterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'repo',component:RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
