import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './utilities/page-not-found.component';
import { SamplerxjsComponent } from './components/samplerxjs/samplerxjs.component';
import { ConcatmapoperatorComponent } from './components/concatmapoperator/concatmapoperator.component';

export const routes: Routes = [
  { path: 'welcome', component: HomeComponent },
  {path:'rxjs',component:SamplerxjsComponent},
  {path:'concatmap',component: ConcatmapoperatorComponent},
  {
    path: 'products',
    loadComponent: () => import('./products/product-list/product-list.component').then(c => c.ProductListComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart-shell/cart-shell.component').then(c => c.CartShellComponent)
  },
 
  { path: '', redirectTo: 'concatmap', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }];