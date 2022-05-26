import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/auth-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  id: string = "";
  name: string = "";

  constructor(private route: ActivatedRoute,private router:Router, private authservice: AuthenticationService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
    })
  }

  login() {
    this.authservice.login();
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['/'])
  }

}
