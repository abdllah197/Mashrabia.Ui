import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TestingOnlyComponent } from './testing-only/testing-only.component';

const routes: Routes = [
  {path: '', redirectTo:'Menu' ,pathMatch:'full'},
  {path: 'Menu', component: MenuComponent},
  {path: 'Test', component: TestingOnlyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
