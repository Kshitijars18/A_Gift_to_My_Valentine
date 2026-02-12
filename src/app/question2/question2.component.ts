import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {
  
  @ViewChild('runBtn') noButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('yesBtn') yesButton!: ElementRef<HTMLButtonElement>;
  constructor(private router: Router) { }
  private scale = 1;

  moveButton() {
    const noBtn = this.noButton.nativeElement;
    const yesBtn = this.yesButton.nativeElement;

    // Move NO button relative to screen
    noBtn.style.position = 'fixed';

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const maxX = viewportWidth - noBtn.offsetWidth;
    const maxY = viewportHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Increase YES size
    this.scale += 0.2;
    yesBtn.style.transform = `scale(${this.scale})`;
  }

  goTothankyou(){
  this.router.navigate(['/app-thankyou']);
}
}
