import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { AppBackgroundDirective } from '../shared/diractives/app-background.directive';
import { ProfileRoutingModule } from './profile-routing.module';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';

@NgModule({
  declarations: [
    ProfileComponent,
    AppBackgroundDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule
  ],
  providers: [CanDeactivateGuard]
})
export class ProfileModule { }
