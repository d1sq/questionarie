import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IQuestion {
  id: number;
  text: string;
  answers: any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
