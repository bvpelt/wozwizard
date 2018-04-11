import {Component, EventEmitter, Output} from '@angular/core';
import {Swosortering} from './swosortering.component';

@Component({
    selector: 'swosorteringlist-root',
    templateUrl: './swosorteringlist.component.html'
})

export class SwosorteringlistComponent {
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    selectedSortering: Swosortering = new Swosortering(1, ['wozObjectNummer']);
    mySortering: Swosortering = this.selectedSortering;

    data = [
        new Swosortering(1, ['wozObjectNummer']),
        new Swosortering(2, ['kadastraleIdentificatie']),
        new Swosortering(3, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
        new Swosortering(4, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
        new Swosortering(5, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'deelperceelnummer']),
        new Swosortering(6, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'appartementsindex']),
        new Swosortering(7, ['betrokkenWaterschap'])
    ];

    onSelect(entiteitId) {
        console.log('called with: ' + entiteitId + ' aantal entities: ' + this.data.length + ' data: ' + this.data);
        this.mySortering = null;
        for (var i = 0; i < this.data.length; i++) {
            //console.log("check loop: " + i + " entiteit id: " + this.entities[i].id + " naam: " + this.entities[i].name);
            if (this.data[i].id == entiteitId) {
                this.mySortering = this.data[i];
                this.notify.emit(i);
                break;
            }
        }
    }
}

