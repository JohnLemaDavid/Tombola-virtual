import { Component } from '@angular/core';

@Component({
  selector: 'app-rifa-tombola',
  templateUrl: './rifa-tombola.component.html',
})
export class RifaTombolaComponent {
  showResult: boolean = false;

  constructor() {}

  startSpin() {
    const pageReloaded = localStorage.getItem('pageReloaded');

    if (!pageReloaded) {
      window.location.reload();
      localStorage.setItem('pageReloaded', 'true');
    }

    this.showResult = true;
    localStorage.removeItem('showResult');
  }

  Result() {
    this.showResult = false;
    localStorage.setItem('showResult', 'true');
  }
}
