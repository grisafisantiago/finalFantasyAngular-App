import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {


  @Output() categoryEmitted: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  categorySelected = (event: any) => {
    this.categoryEmitted.emit(event.target.value);
  };

}
