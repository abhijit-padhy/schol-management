import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  loginValidate(){
    console.log("navigated",localStorage.getItem('userToken')==null);
    if (sessionStorage.getItem('userToken')!=null) {
      console.log("not null");
      this.router.navigateByUrl('/students');
    }
  }
  signOut(){
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
