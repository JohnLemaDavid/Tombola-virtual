import { Component } from '@angular/core';

@Component({
  selector: 'app-rifa-tombola',
  templateUrl: './rifa-tombola.component.html',
})
export class RifaTombolaComponent {
  showResult: boolean=false;

  constructor() {
  }

  startSpin() {
    const pageReloaded = localStorage.getItem('pageReloaded');
    const control = localStorage.getItem('showResult');

    if (!pageReloaded && !control) {
      window.location.reload();
      localStorage.setItem('pageReloaded', 'true');
      localStorage.setItem('showResult', 'true');
      this.showResult = true;
    } else if (pageReloaded && control) {
      localStorage.setItem('showResult', 'true');
      this.showResult = true;
    }
  }

  Result() {
    this.showResult = false;
    localStorage.setItem('showResult', 'false');
  }
}
