import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { InputSearchFieldComponent } from './home/components/input-search-field/input-search-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './home/cards/cards.component';
import { OptionsComponent } from './home/options/options.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HomeComponent,
    InputSearchFieldComponent,
    CardsComponent,
    OptionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    HomeComponent,
    InputSearchFieldComponent
  ]
})
export class PagesModule { }
