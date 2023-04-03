import { Component } from '@angular/core';
import { questions } from '../security';
@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.scss'],
})
export class SecurityQuestionsComponent {
  questions = questions;
}
