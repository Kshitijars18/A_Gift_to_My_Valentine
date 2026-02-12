import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component {
  constructor(private router: Router) { }
goToAreYouReady() {
    this.router.navigate(['/app-are-you-ready']);
  }
}
