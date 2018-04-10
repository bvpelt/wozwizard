import {Component, Output, EventEmitter} from '@angular/core';
import {Wozsortering} from './wozsortering.component';

@Component({
    selector: 'wozsorteringlist-root',
    templateUrl: './wozsorteringlist.component.html'
})

export class WozsorteringlistComponent {
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    selectedSortering: Wozsortering = new Wozsortering(1, ['wozObjectNummer']);
    mySortering: Wozsortering = this.selectedSortering;

    data = [
        new Wozsortering(1, ['wozObjectNummer']),
        new Wozsortering(2, ['identificatie']),
        new Wozsortering(3, ['aoa.identificatie']),
        new Wozsortering(4, ['aoa.postcode', 'aoa.huisnummer', 'aoa.huisletter', 'aoa.huisnummertoevoeging']),
        new Wozsortering(5, ['wpl.woonplaatsNaam', 'gor.openbareRuimteNaam', 'aoa.huisnummer', 'aoa.huisletter',
            'aoa.huisnummertoevoeging']),
        new Wozsortering(6, ['wpl.woonplaatsNaam', 'gor.openbareRuimteNaam', 'locatieOmschrijving']),
        new Wozsortering(7, ['kadastraleIdentificatie']),
        new Wozsortering(8, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
        new Wozsortering(9, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
        new Wozsortering(10, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'kdp.deelperceelNummer']),
        new Wozsortering(11, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'apr.appartementsindex']),
        new Wozsortering(12, ['bsVesNummerOfId', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
        new Wozsortering(13, ['naam', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
        new Wozsortering(14, ['postcode', 'huisnummer', 'huisletter', 'huisnummertoevoeging',
            'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
        new Wozsortering(15, ['postcode', 'postadresnummer', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
        new Wozsortering(16, ['landnaam', 'sub.adresBuitenland1', 'sub.adresBuitenland2', 'sub.adresBuitenland3',
            'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
        new Wozsortering(17, ['landcode', 'sub.adresBuitenland1', 'sub.adresBuitenland2', 'sub.adresBuitenland3',
            'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
        new Wozsortering(18, ['gebruikscode', 'wpl.woonplaatsnaam', 'gor.openbareruimteNaam', 'aoa.huisnummer',
            'aoa.huisletter', 'aoa.huisnummertoevoeging']),
        new Wozsortering(20, ['wozObjectnummer', 'wozObjectnummer']),
        new Wozsortering(24, ['identificatie']),
        new Wozsortering(25, ['identificatie']),
        new Wozsortering(26, ['identificatie']),
        new Wozsortering(27, ['gemeenteCode']),
        new Wozsortering(28, ['betrokkenWaterschap'])
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

