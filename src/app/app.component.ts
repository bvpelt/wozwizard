import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WOZ Wizard';

  public showSortering: boolean = false;
  public showSwoSortering: boolean = false;
  public showWozSortering: boolean = false;
  public showWrdSortering: boolean = false;
  public selectedSortering: number;

  onNotify(selSort: number): void {
    //alert('app.component: ' + selSort);
    this.showSortering = true;
    this.selectedSortering = selSort;

    switch (selSort) {
      case 1: {
        this.showSwoSortering = true;
        this.showWozSortering = false;
        this.showWrdSortering = false;
      }
        break;
      case 2: {
        this.showSwoSortering = false;
        this.showWozSortering = true;
        this.showWrdSortering = false;
      }
        break;
      case 3: {
        this.showSwoSortering = false;
        this.showWozSortering = false;
        this.showWrdSortering = true;
      }
        break;
      default: {
        this.showWozSortering = false;
        this.showWrdSortering = false;
        this.showSwoSortering = true;
      }
    }
  }
}
