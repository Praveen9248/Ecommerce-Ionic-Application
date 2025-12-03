import { Component } from '@angular/core';
import { IonicSlides, RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      event.target.complete();
    }, 5000);
  }
}
