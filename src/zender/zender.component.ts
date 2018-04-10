import {Component} from '@angular/core';

@Component({
    selector: 'zender-root',
    templateUrl: './zender.component.html'
})

export class ZenderComponent {
    organisatie: number;
    applicatie: string;
    administratie: string;
    gebruiker: string;
}
