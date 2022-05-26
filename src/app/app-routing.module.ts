import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error-component/error-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: "recipe",
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) //Lazy Loading routes
  },
  {
    path: "",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) //Lazy Loading routes
  },
  {
    path: "shopping-list/:id/:name",
    canActivate: [AuthGuard],
    loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) //Lazy Loading routes
  },
  {
    path: "profile/:id/:name",
    canActivate: [AuthGuard],
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) //Lazy Loading routes
  },
  {
    path: "posts",
    canActivate: [AuthGuard],
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) //Lazy Loading routes
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "error",
    component: ErrorComponent,
    data: { message: "Page not found" }
  },
  {
    path: "**",
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
