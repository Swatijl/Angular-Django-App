import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import { Router} from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
loginData={
  mo:"",
  pwd:"",
}
signup={
  name:"",
  pwd:"",
  mo:""
};
user:any={};
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
  }
  login()
  {
    let postData ={
      "username": this.loginData.mo,
      "password": this.loginData.pwd
    };
    this.api.postNotes('/login/',postData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/notes']);
    },error=>{
      console.log(error);
    })
   
  }
signUp(){
  let postData={
    "mobile":this.signup.mo,
    "name":this.signup.name,
    "password":this.signup.pwd
  };
  this.api.postNotes('/register/',postData).subscribe(data => {
    console.log(data);
  },error=>{
    console.log(error);
  })
}
}
