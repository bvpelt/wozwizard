import {Component, EventEmitter, Output} from '@angular/core';
import {Wrdsortering} from './wrdsortering.component';

@Component({
    selector: 'wrdsorteringlist-root',
    templateUrl: './wrdsorteringlist.component.html'
})

export class WrdsorteringlistComponent {
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    selectedSortering: Wrdsortering = new Wrdsortering(1, ['wozObjectNummer']);
    mySortering: Wrdsortering = this.selectedSortering;

    data = [
        new Wrdsortering(1, ['wozObjectNummer', 'waardepeildatum', 'toestandspeildatum']),
        new Wrdsortering(2, ['aoa.postcode', 'aoa.huisnummer', 'huisnummerletter', 'huisnummertoevoeging',
            'waardepeildatum', 'toestandspeildatum']),
        new Wrdsortering(3, ['wpl.woonplaatsnaam', 'gor.openbareruimteNaam', 'aoa.huisnummer',
            'aoa.huisnummerletter', 'aoa.huisnummertoevoeging', 'waardepeildatum', 'toestandspeildatum']),
        new Wrdsortering(4, ['wpl.woonplaatsnaam', 'locatieOmschrijving', 'gor.openbareruimtenaam',
            'aoa.huisnummer', 'aoa.huisletter', 'aoa.huisnummertoevoeging', 'waardepeildatum', 'toestandspeildatum']),
        new Wrdsortering(5, ['gemeenteCode']),
        new Wrdsortering(6, ['betrokkenWaterschap'])
    ];

    onSelect(entiteitId) {
        //console.log("called with: " + entiteitId + " aantal entities: " + this.entities.length + " entities: " + this.entities);
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

