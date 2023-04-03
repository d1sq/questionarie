import { Component } from '@angular/core';
import { questions } from '../staff';
@Component({
  selector: 'app-other-questions',
  templateUrl: './other-questions.component.html',
  styleUrls: ['./other-questions.component.scss'],
})
export class OtherQuestionsComponent {
  questions = questions;
}
