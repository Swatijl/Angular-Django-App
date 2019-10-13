import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
notes={
  desc:"",
  status:""
};
getnotes={};
getSearchDetail={};
search:any;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
  }
saveNotes(){
  let postData ={
    "desc":this.notes.desc,
    "status":this.notes.status
  }
  this.api.postNotes('/notes/',postData).subscribe(data => {
    console.log(data);
  },error =>{
    console.log(error);
  });
}
getNotes(){
  this.getnotes ={};
  this.api.getNotes('/notes/').subscribe(data => {
    console.log(data);
    this.getnotes=data;
  },error =>{
    console.log(error);
  });
}
searchUsers(){
  this.api.search(this.search).subscribe(data => {
    console.log(data);
    this.getSearchDetail=data;
    console.log(this.getSearchDetail);
  },error =>{
    console.log(error);
  });
}
}
