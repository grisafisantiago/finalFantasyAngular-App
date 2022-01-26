import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinalFantasyService } from 'src/app/services/final-fantasy.service';

@Component({
  selector: 'app-input-search-field',
  templateUrl: './input-search-field.component.html',
  styleUrls: ['./input-search-field.component.css']
})
export class InputSearchFieldComponent implements OnInit {

  @Output() chars: EventEmitter<any[]> = new EventEmitter<any[]>();

  public characters: any[] = [];
  public category: String = "";

  public SearchForm: FormGroup = this.fb.group({
    inputSearchField: ["", [Validators.required, Validators.minLength(3)],]
  });

  constructor(private fb: FormBuilder, private finalFantasyService: FinalFantasyService, private router: Router) { }

  ngOnInit(): void {
  }

  public showErrors(error: string) {
    return this.SearchForm.controls[error].touched && this.SearchForm.controls[error].invalid;
  }

  public submitForm() {
    if (this.SearchForm.invalid && ("" + this.getCategory).trim().length <= 0) {
      this.SearchForm.markAllAsTouched();
      this.SearchForm.reset({
        inputSearchField: "",
      })
    } else {
      this.finalFantasyService.getFinalFantasySearch(this.SearchForm.get('inputSearchField')?.value, this.category).subscribe((characters) => {
        this.characters = characters;
        this.chars.emit(this.characters);
        this.SearchForm.reset({
          inputSearchField: "",
        })
      });
    }
  }

  public goHome() {
    return this.router.navigateByUrl('home');
  }

  public getCategory(event: any) {
    this.category = event;
  }
}
