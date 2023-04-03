import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { comments } from '../comments';
import { Location } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  results: any = [];
  state: any;
  score: number = 0;

  comments = comments;

  constructor(private router: Router, private location: Location) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }
  ngOnInit(): void {
    if (this.state) {
      this.results = this.state.results;
    }
    this.score = this.state.results[this.state.results.length - 1].cost;
    if (!this.score) this.score = 0;
  }

  goBack() {
    this.location.back();
  }

  getComment(i: number) {
    const comment = comments[i]?.comment;

    if (comment) {
      return comment;
    }
    return 'Без комментариев';
  }
}
