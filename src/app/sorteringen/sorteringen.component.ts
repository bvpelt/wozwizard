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
  new Sortering(2, ['identificatie']),
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
  new Sortering(12, ['bsVesNummerOfId', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
  new Sortering(13, ['naam', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
  new Sortering(14, ['postcode', 'huisnummer', 'huisletter', 'huisnummertoevoeging',
    'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
  new Sortering(15, ['postcode', 'postadresnummer', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
  new Sortering(16, ['landnaam', 'sub.adresBuitenland1', 'sub.adresBuitenland2', 'sub.adresBuitenland3',
    'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
  new Sortering(17, ['landcode', 'sub.adresBuitenland1', 'sub.adresBuitenland2', 'sub.adresBuitenland3',
    'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
  new Sortering(18, ['gebruikscode', 'wpl.woonplaatsnaam', 'gor.openbareruimteNaam', 'aoa.huisnummer',
    'aoa.huisletter', 'aoa.huisnummertoevoeging']),
  new Sortering(20, ['wozObjectnummer', 'wozObjectnummer']),
  new Sortering(24, ['identificatie']),
  new Sortering(25, ['identificatie']),
  new Sortering(26, ['identificatie']),
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
          this.fields.push(new Keyvalue(j, this.entiteitSortering[i].name[j]));
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

  makeText(cb: Checkbox [] ) {
    this.xmlString = '';'sortering: ' + this.sortering;
    // 1-SWO, 2-WOZ, 3-SWO
    switch (this.sortering) {
      case 1:
        this.xmlString = this.makeSWOText(cb);
        break;
      case 2:
        this.xmlString = this.makeWOZText(cb);
        break;
      case 3:
        this.xmlString = this.makeWRDText(cb);
        break;
      default:
        console.log('Error');
    }
    return this.xmlString;
  }

  makeSWOText(cb: Checkbox []) {
    var xml = 'SWO';

    var swobuilder = new SWOBuilder(cb);

    xml = swobuilder.makeText();
    //console.log('makeSWOText: ' + xml);

    return xml;
  }

  makeWOZText(cb: Checkbox []) {
    var xml = 'WOZ';

    var wozbuilder = new WOZBuilder(cb);

    xml = wozbuilder.makeText();
    //console.log('makeWOZText: ' + xml);

    return xml;
  }

  makeWRDText(cb: Checkbox []) {
    var xml = 'WRD';

    var wrdbuilder = new WRDBuilder(cb);

    xml = wrdbuilder.makeText();
    //console.log('makeWRDText: ' + xml);

    return xml;
  }

}
