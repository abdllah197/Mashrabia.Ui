import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TestingOnlyComponent } from './testing-only/testing-only.component';

export const routes: Routes = [
  {path: '', redirectTo:'Menu' ,pathMatch:'full'},
  {path: 'Menu', component: MenuComponent},
  {path: 'Test', component: TestingOnlyComponent},
];
