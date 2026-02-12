import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-are-you-ready',
  templateUrl: './are-you-ready.component.html',
  styleUrls: ['./are-you-ready.component.css']
})
export class AreYouReadyComponent {
 constructor(private router: Router) { }
 goToQuestion2() {
    this.router.navigate(['/app-question2']);
  }
}
