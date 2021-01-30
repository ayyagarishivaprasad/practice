import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { RouatingGuard } from './rouating.guard';
import { DataComponent } from './data/data.component';
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [


  // {
  //   path: 'user',canActivateChild:[RouatingGuard],
  //   loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  // },

  {
    path: 'user',canLoad:[RouatingGuard],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '',canLoad:[RouatingGuard],
 component:DataComponent
  },
  {
    path: 'pipes',
 component:PipesComponent
  }
  // {
  //   path: 'root',
  //   canActivateChild: [RouatingGuard],
  //   children: [
  //     {
  //        path: 'team',
  //        component: LoginComponent
  //     }
  //   ]
  // }
  ,{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
