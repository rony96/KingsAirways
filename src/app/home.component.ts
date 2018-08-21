import { Component, OnInit } from '@angular/core';
import { Flightmodel } from './model/flightmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }
  model:Flightmodel;

flightlist: Flightmodel[];

  constructor()
  {
    this.model=new Flightmodel("chennai","tirchy");
     this.flightlist=[
        new Flightmodel("chennai","banglore"),
        new Flightmodel("banglore","chennai"),
        new Flightmodel("mumbai","chennai"),
        new Flightmodel("kolkata","pune")
    ];
  }
}


