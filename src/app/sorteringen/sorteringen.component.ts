import {Component, Input, OnInit} from '@angular/core';
import {Sortering} from '../sortering';
import {SorteringData} from '../sorteringdata';
import {Keyvalue} from '../keyvalue';
import {Checkbox} from '../checkbox';
import {SWOBuilder} from '../swobuilder';
import {WOZBuilder} from '../wozbuilder';
import {WRDBuilder} from '../wrdbuilder';

const swodata = [
    new Sortering(1, ['wozObjectNummer']),
    new Sortering(2, ['kadastraleIdentificatie']),
    new Sortering(3, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
    new Sortering(4, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
    new Sortering(5, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'deelperceelnummer']),
    new Sortering(6, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'appartementsindex']),
    new Sortering(7, ['betrokkenWaterschap'])
];

const wozdata = [
    new Sortering(1, ['wozObjectNummer']),
    new Sortering(2, ['identificatie (ontleentaanduiding aan)']),
    new Sortering(3, ['aoa.identificatie']),
    new Sortering(4, ['aoa.postcode', 'aoa.huisnummer', 'aoa.huisletter', 'aoa.huisnummertoevoeging']),
    new Sortering(5, ['wpl.woonplaatsNaam', 'gor.openbareRuimteNaam', 'aoa.huisnummer', 'aoa.huisletter',
        'aoa.huisnummertoevoeging']),
    new Sortering(6, ['wpl.woonplaatsNaam', 'gor.openbareRuimteNaam', 'locatieOmschrijving']),
    new Sortering(7, ['kadastraleIdentificatie']),
    new Sortering(8, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
    new Sortering(9, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
    new Sortering(10, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'kdp.deelperceelNummer']),
    new Sortering(11, ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'apr.appartementsindex']),
    new Sortering(12, ['bsVesNummerOfId', 'aanduidingEigenaarGebruiker', 'wozObjectNummer']),
    new Sortering(13, ['naam', 'aanduidingEigenaarGebruiker', 'wozObjectNummer']),
    new Sortering(14, ['postcode', 'huisnummer', 'huisletter', 'huisnummertoevoeging',
        'aanduidingEigenaarGebruiker', 'wozObjectNummer']),
    new Sortering(15, ['postcode', 'postadresnummer', 'aanduidingEigenaarGebruiker', 'wozObjectNummer']),
    new Sortering(16, ['landnaam', 'sub.adresBuitenland1', 'sub.adresBuitenland2', 'sub.adresBuitenland3',
        'aanduidingEigenaarGebruiker', 'wozObjectNummer']),
    new Sortering(17, ['landcode', 'sub.adresBuitenland1', 'sub.adresBuitenland2', 'sub.adresBuitenland3',
        'aanduidingEigenaarGebruiker', 'wozObjectNummer']),
    new Sortering(18, ['gebruikscode', 'wpl.woonplaatsnaam', 'gor.openbareruimteNaam', 'aoa.huisnummer',
        'aoa.huisletter', 'aoa.huisnummertoevoeging']),
    new Sortering(20, ['wozObjectnummer', 'wozObjectNummer']),
    new Sortering(24, ['identificatie isVerbondenMet']),
    new Sortering(25, ['identificatie heeftPand']),
    new Sortering(26, ['identificatie heeftAlsAanduiding']),
    new Sortering(27, ['gemeenteCode']),
    new Sortering(28, ['betrokkenWaterschap'])
];

const wrddata = [
    new Sortering(1, ['wozObjectNummer', 'waardepeildatum', 'toestandspeildatum']),
    new Sortering(2, ['aoa.postcode', 'aoa.huisnummer', 'huisnummerletter', 'huisnummertoevoeging',
        'waardepeildatum', 'toestandspeildatum']),
    new Sortering(3, ['wpl.woonplaatsnaam', 'gor.openbareruimteNaam', 'aoa.huisnummer',
        'aoa.huisnummerletter', 'aoa.huisnummertoevoeging', 'waardepeildatum', 'toestandspeildatum']),
    new Sortering(4, ['wpl.woonplaatsnaam', 'locatieOmschrijving', 'gor.openbareruimtenaam',
        'aoa.huisnummer', 'aoa.huisletter', 'aoa.huisnummertoevoeging', 'waardepeildatum', 'toestandspeildatum']),
    new Sortering(5, ['gemeenteCode']),
    new Sortering(6, ['betrokkenWaterschap'])
];

const swocheckbox = [
    new Checkbox(1, 'omvat'),
    new Checkbox(2, 'ligtIn')
];

const wozcheckbox = [
    new Checkbox(1, 'ontleentAanduidingAan'),
    new Checkbox(2, 'isVerbondenMet'),
    new Checkbox(3, 'bevatKadastraleObjecten'),
    new Checkbox(4, 'heeftAlsAanduiding'),
    new Checkbox(5, 'heeftPand'),
    new Checkbox(6, 'heeftSluimerendObject'),
    new Checkbox(7, 'heeftBelanghebbende'),
    new Checkbox(8, 'ligtIn')
];

const wrdcheckbox = [
    new Checkbox(1, 'isVoor'),
    new Checkbox(2, 'wordtVerdeeldNaar'),
    new Checkbox(3, 'isBeschiktVoor')
];

@Component({
    selector: 'app-sorteringen',
    templateUrl: './sorteringen.component.html',
    styleUrls: ['./sorteringen.component.css']
})

export class SorteringenComponent implements OnInit {

    @Input() sortering: number;

    public sorteringenData: SorteringData[] =
        [
            new SorteringData(1, swodata, swocheckbox),
            new SorteringData(2, wozdata, wozcheckbox),
            new SorteringData(3, wrddata, wrdcheckbox)
        ];

    public entiteitSortering: Sortering[] = null;
    public options: Checkbox[] = null;
    public selectedItems: Array<Checkbox> = [];

    public selectedSortering: Sortering = new Sortering(0, ['kies een entiteit']);
    public fields: Array<Keyvalue>;
    public index: number;

    public xmlString: string = this.makeText(this.selectedItems);

    constructor() {
    }

    ngOnInit() {
        console.log('sortering.onInit: ' + this.sortering);
        for (var i = 0; i < this.sorteringenData.length; i++) {
            if (this.sorteringenData[i].id == this.sortering) {
                this.entiteitSortering = this.sorteringenData[i].data;
                this.options = this.sorteringenData[i].options;
                break;
            }
        }
        this.makeText(this.selectedItems);
    }

    onSelect(entiteitId) {
        console.log('called with: ' + entiteitId + ' aantal entities: ' + this.entiteitSortering.length +
            ' entities: ' + this.entiteitSortering);
        for (var i = 0; i < this.entiteitSortering.length; i++) {
            console.log('check loop: ' + i + ' entiteit id: ' + this.entiteitSortering[i].id + ' naam: ' + this.entiteitSortering[i].name);
            if (this.entiteitSortering[i].id == entiteitId) {
                this.selectedSortering = new Sortering(this.entiteitSortering[i].id, this.entiteitSortering[i].name);
                // this.notify.emit(this.entiteiten[i].id);
                this.fields = [];
                for (var j = 0; j < this.entiteitSortering[i].name.length; j++) {
                    var pattern: string = '';
                    switch (this.entiteitSortering[i].name[j]) {
                        case 'aanduidingEigenaarGebruiker':
                            pattern = '(E|G|B|M)';
                            break;
                        case 'aoa.huisletter':
                            pattern = '[A-Za-z]{1}';
                            break;
                        case 'aoa.huisnummer':
                            pattern = '\\d{5}';
                            break;
                        case 'aoa.huisnummertoevoeging':
                            pattern = '(bis|[a-zA-Z])';
                            break;
                        case 'aoa.identificatie':
                            pattern = '\\d{16}';
                            break;
                        case 'aoa.postcode':
                            pattern = '\\d{4}[A-Z]{2}';
                            break;
                        case 'appartementsindex':
                            pattern = '\\d{5}';
                            break;
                        case 'deelperceelnummer':
                            pattern = '\\d{5}';
                            break;
                        case 'gor.openbareRuimteNaam':
                            pattern = '.{0,35}';
                            break;
                        case 'huisnummer':
                            pattern = '\\d{1,5}';
                            break;
                        case 'huisnummertoevoeging':
                            pattern = '(bis|[a-zA-Z])';
                            break;
                        case 'huisletter':
                            pattern = '[a-zA-Z]{1}';
                            break;
                        case 'kadastraleIdentificatie':
                            pattern = '\\d{12}';
                            break;
                        case 'kadastraleGemeenteCode':
                            pattern = '[A-Za-z0-9]{5}';
                            break;
                        case 'kadastraleSectie':
                            pattern = '\\d{5}';
                            break;
                        case 'identificatie (ontleentaanduiding aan)':
                            pattern = '\\d{16}';
                            break;
                        case 'perceelnummer':
                            pattern = '\\d{5}';
                            break;
                        case 'postcode':
                            pattern = '\\d{4}[A-Z]{2}';
                            break;
                        case 'wpl.woonplaatsNaam':
                            pattern =  '.{0,35}';
                            break;
                        case 'wozObjectNummer':
                            pattern = '\\d{12}';
                            break;
                        default:
                            pattern = '.*';
                    }
                    this.fields.push(new Keyvalue(j, this.entiteitSortering[i].name[j], pattern));
                }
                break;
            }
        }
    }

    onCheckboxChanged(option, index, event) {
        const x: Checkbox = option;
        // console.log('Cbc - option: ' + x.name + ' index: ' + index);
        if (event.target.checked) {
            // console.log('Cbc - event checked: ' + event.target.checked + ' index: ' + index);
            // add checkbox to the set
            this.selectedItems.push(x);
        } else {
            // console.log('Cbc - event not checked: ' + event.target.checked + ' index: ' + index);
            // find checkbox to remove
            for (var j = 0; j < this.selectedItems.length; j++) {
                if ((this.selectedItems[j].name == x.name) && (this.selectedItems[j].id == x.id)) { // found
                    break;
                }
            }
            this.selectedItems.splice(j, 1);
        }
        this.makeText(this.selectedItems);
        // console.log(this.selectedItems);
    }

    public rebuild() {
        // console.log("rebuild: " + Date.now());
        this.makeText(this.selectedItems);
    }

    makeText(cb: Checkbox []) {
        this.xmlString = '';
        // 1-SWO, 2-WOZ, 3-SWO
        switch (this.sortering) {
            case 1:
                this.xmlString = this.makeSWOText(cb, this.selectedSortering, this.fields);
                break;
            case 2:
                this.xmlString = this.makeWOZText(cb, this.selectedSortering, this.fields);
                break;
            case 3:
                this.xmlString = this.makeWRDText(cb, this.selectedSortering, this.fields);
                break;
            default:
                console.log('Error');
        }
        return this.xmlString;
    }

    makeSWOText(cb: Checkbox [], sortering: Sortering, fields: Array<Keyvalue>) {
        var xml = 'SWO';

        var swobuilder = new SWOBuilder(cb, sortering, fields);

        xml = swobuilder.makeText();
        //console.log('makeSWOText: ' + xml);

        return xml;
    }

    makeWOZText(cb: Checkbox [], sortering: Sortering, fields: Array<Keyvalue>) {
        var xml = 'WOZ';

        var wozbuilder = new WOZBuilder(cb, sortering, fields);

        xml = wozbuilder.makeText();
        //console.log('makeWOZText: ' + xml);

        return xml;
    }

    makeWRDText(cb: Checkbox [], sortering: Sortering, fields: Array<Keyvalue>) {
        var xml = 'WRD';

        var wrdbuilder = new WRDBuilder(cb, sortering, fields);

        xml = wrdbuilder.makeText();
        //console.log('makeWRDText: ' + xml);

        return xml;
    }

}
