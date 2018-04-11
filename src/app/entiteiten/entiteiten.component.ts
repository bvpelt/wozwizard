import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entiteit} from '../entiteit';

@Component({
    selector: 'app-entiteiten',
    templateUrl: './entiteiten.component.html',
    styleUrls: ['./entiteiten.component.css']
})


export class EntiteitenComponent implements OnInit {
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    public entiteiten: Entiteit [] = [
        {id: 1, name: 'SWO'},
        {id: 2, name: 'WOZ'},
        {id: 3, name: 'WRD'}
    ];

    public selectedEntiteit: Entiteit = new Entiteit(0, 'kies een entiteit');

    constructor() {
    }

    ngOnInit() {
    }

    onSelect(entiteitId) {
        //console.log('called with: ' + entiteitId + ' aantal entities: ' + this.entiteiten.length + ' entities: ' + this.entiteiten);
        for (var i = 0; i < this.entiteiten.length; i++) {
            //console.log('check loop: ' + i + ' entiteit id: ' + this.entiteiten[i].id + ' naam: ' + this.entiteiten[i].name);
            if (this.entiteiten[i].id == entiteitId) {
                this.selectedEntiteit = new Entiteit(this.entiteiten[i].id, this.entiteiten[i].name);
                this.notify.emit(this.entiteiten[i].id);
                break;
            }
        }
    }

}
