import { Component } from '@angular/core';
import { questions } from '../network';
@Component({
  selector: 'app-network-questions',
  templateUrl: './network-questions.component.html',
  styleUrls: ['./network-questions.component.scss'],
})
export class NetworkQuestionsComponent {
  questions = questions;
}
