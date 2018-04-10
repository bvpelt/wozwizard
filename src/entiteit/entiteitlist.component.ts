import {Component, Output, EventEmitter} from '@angular/core';
import {Entiteit} from './entiteit.component';

@Component({
    selector: 'entiteit-list',
    templateUrl: './entiteitlist.component.html'
})
export class EntiteitListComponent {
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    selectedEntiteit: Entiteit = new Entiteit(1, 'WOZ');
    myEntiteit: Entiteit = this.selectedEntiteit;
    entities = [
        new Entiteit(1, 'WOZ'),
        new Entiteit(2, 'WRD'),
        new Entiteit(3, 'SWO')
    ];

    onSelect(entiteitId) {
        //console.log("called with: " + entiteitId + " aantal entities: " + this.entities.length + " entities: " + this.entities);
        this.myEntiteit = null;
        for (var i = 0; i < this.entities.length; i++) {
            //console.log("check loop: " + i + " entiteit id: " + this.entities[i].id + " naam: " + this.entities[i].name);
            if (this.entities[i].id == entiteitId) {
                this.myEntiteit = this.entities[i];
                this.notify.emit(i);
                break;
            }
        }
    }
}
