import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';
import { ProfileService } from './shared/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, CanDeactivateGuard {

  @ViewChild('f') userForm: any;
  dataSubmitted: boolean = false;
  genders: string[] = ['male', 'female'];
  suggestedName: string = "super user";

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {}

  onSumbit() {
    console.log(this.userForm.value);
    this.dataSubmitted = true;
    this.profileService.storeUserData(this.userForm.value);
  }

  suggestName() {
    this.userForm.form.patchValue(
      {
        name: this.suggestedName
      }
    )
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.dataSubmitted) {
      return confirm("Do you wants to discard the changes");
    } else {
      return true;
    }
  }

}
