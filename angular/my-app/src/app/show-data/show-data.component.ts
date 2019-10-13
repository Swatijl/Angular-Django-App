import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
  providers:[ApiService]
})
export class ShowDataComponent implements OnInit {
  data: any={};
  req: any;

  constructor(private http:Http,private api:ApiService) { }
 
  ngOnInit() {
     this.getName();
  	}

  ngOnDestroy(){
    this.req.unsubscribe();
  }
  getName(){
    this.api.getNotes('/getData/').subscribe(data => {
      console.log(data);
      this.data = data;
    },error=>{
      console.log(error);
    })
  }

}
