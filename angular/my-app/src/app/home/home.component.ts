import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ApiService} from "../api.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notes:any=[];
  get:any;
  constructor(private http:Http,private api:ApiService) { }

  ngOnInit() {
  }
getNotes(){
    this.api.getNotes('/getData/').subscribe(data => {
      console.log(data);
      this.notes = data;
      console.log(this.notes);
    },error=>{
      console.log(error);
    })
  }
postNotes(){
  this.api.postNotes('/getData/',this.get).subscribe(data => {
    console.log(data);
  },error=>{
    console.log(error);
  })
}
putNotes(){
  this.api.putNotes('/getData/',this.get).subscribe(data => {
    console.log(data);
  },error=>{
    console.log(error);
  })
}
deleteNotes(){
  this.api.deleteNotes('/getData/').subscribe(data => {
    console.log(data);
  },error=>{
    console.log(error);
  })
}
}
