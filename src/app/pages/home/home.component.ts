import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getCharacters(event: any[]) {
    this.data = event;
  }

}
