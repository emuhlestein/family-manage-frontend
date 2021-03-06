import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ROUTES = [
  {
    path: 'foodstorage',
    loadChildren: () => import('./food-storage-manager/food-storage-manager.module').then(m => m.FoodStorageModule)
  },
  // {
  //   path: 'producttype',
  //   loadChildren: () => import('./product-type/product-type.module').then(m => m.ProductTypeModule)
  // },
  {
    path: 'containertype',
    loadChildren: () => import('./container-type/container-type.module').then(m => m.ContainerTypeModule)
  },
  { path: '', redirectTo: 'foodstorage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
