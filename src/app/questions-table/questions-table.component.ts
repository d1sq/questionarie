import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrls: ['./questions-table.component.scss'],
})
export class QuestionsTableComponent implements OnInit {
  questionForm!: FormGroup;

  @Input()
  questions: any[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const formControls: { [key: string]: any } = {};
    for (let i = 0; i < this.questions.length; i++) {
      formControls[`answer${i}`] = ['', Validators.required];
    }
    this.questionForm = this.fb.group(formControls);
  }

  submitForm() {
    const results = [];
    let finalCost = 0;

    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];

      finalCost += this.questionForm.get(`answer${i}`)?.value.cost;

      results.push({
        question: question.question,
        answer: this.questionForm.get(`answer${i}`)?.value,
        id: this.questionForm.get(`answer${i}`)?.value.id,
        cost: finalCost,
      });
    }

    this.router.navigate(['/results'], { state: { results: results } });
  }

  resetForm() {
    this.questionForm.reset();
  }
}
