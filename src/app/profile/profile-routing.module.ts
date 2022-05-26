import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CanDeactivateGuard } from "./shared/services/can-deactivate-guard.service";
import { ProfileComponent } from "./profile.component";

const postRoutes: Routes = [{
    path: '',
    canDeactivate: [CanDeactivateGuard],
    component: ProfileComponent
}]

@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {

}