import {Checkbox} from './checkbox';
import {Sortering} from './sortering';
import {Keyvalue} from './keyvalue';

export class WOZBuilder {
    public xmlString: string = this.makeText();

    private ontleentAanduidingAan: boolean = false;
    private isVerbondenMet: boolean = false;
    private bevatKadastraleObjecten: boolean = false;
    private heeftAlsAanduiding: boolean = false;
    private heeftPand: boolean = false;
    private heeftSluimerendObject: boolean = false;
    private heeftBelanghebbende: boolean = false;
    private ligtIn: boolean = false;

    private sortering: Sortering;
    private fields: Array<Keyvalue>;

    private xmlString03: string = '    </woz:object>\n' +
        '  </woz:scope>\n' +
        '</lv:wozLv01-lvwoz>';

    private xmlString01: string = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<lv:wozLv01-lvwoz xmlns:stuf="http://www.egem.nl/StUF/StUF0301"\n' +
        '                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
        '                  xmlns:woz="http://www.stufstandaarden.nl/sectormodel/woz0313"\n' +
        '                  xmlns:gml="http://www.opengis.net/gml/3.2"\n' +
        '                  xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
        '                  xmlns:bg="http://www.egem.nl/StUF/sector/bg/0310"\n' +
        '                  xmlns:lv="http://www.stufstandaarden.nl/koppelvlak/woz0313/lv0100"\n' +
        '                  xsi:schemaLocation="http://www.stufstandaarden.nl/koppelvlak/woz0313/lv0100' +
        ' woz0313_20160701/woz0313_lv0100/vraagAntwoord/lv0100_msg_vraagAntwoord.xsd">\n' +
        '  <woz:stuurgegevens>\n' +
        '    <stuf:berichtcode>Lv01</stuf:berichtcode>\n' +
        '    <stuf:zender>\n' +
        '      <stuf:organisatie>12</stuf:organisatie>\n' +
        '      <stuf:applicatie>APP</stuf:applicatie>\n' +
        '      <stuf:administratie>P</stuf:administratie>\n' +
        '      <stuf:gebruiker>jan de vries</stuf:gebruiker>\n' +
        '    </stuf:zender>\n' +
        '    <stuf:ontvanger>\n' +
        '      <stuf:organisatie>00000001802327497000</stuf:organisatie>\n' +
        '      <stuf:applicatie>LVWOZ</stuf:applicatie>\n' +
        '      <stuf:administratie>P</stuf:administratie>\n' +
        '      <stuf:gebruiker>systeem</stuf:gebruiker>\n' +
        '    </stuf:ontvanger>\n' +
        '    <stuf:referentienummer>refnr</stuf:referentienummer>\n' +
        '    <stuf:tijdstipBericht>20180301120000000</stuf:tijdstipBericht>\n' +
        '    <stuf:entiteittype>WOZ</stuf:entiteittype>\n' +
        '  </woz:stuurgegevens>\n' +
        '  <woz:parameters>\n' +
        '    <stuf:sortering>1</stuf:sortering>\n' +
        '    <stuf:indicatorVervolgvraag>false</stuf:indicatorVervolgvraag>\n' +
        '    <stuf:maximumAantal>15</stuf:maximumAantal>\n' +
        '    <stuf:indicatorAfnemerIndicatie>false</stuf:indicatorAfnemerIndicatie>\n' +
        '    <stuf:indicatorAantal>false</stuf:indicatorAantal>\n' +
        '  </woz:parameters>\n';

    private xmlString02: string = '  <woz:scope>\n' +
        '    <woz:object stuf:entiteittype="WOZ">\n' +
        '      <woz:wozObjectNummer xsi:nil="true"/>\n' +
        '      <woz:aanduidingWOZobject>\n' +
        '        <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '        <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '        <bg:aoa.postcode xsi:nil="true"/>\n' +
        '        <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '        <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '        <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '        <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '        <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '        <bg:locatieOmschrijving xsi:nil="true"/>\n' +
        '      </woz:aanduidingWOZobject>\n' +
        '      <woz:statusWozObject xsi:nil="true"/>\n' +
        '      <woz:grondoppervlakte xsi:nil="true"/>\n' +
        '      <woz:gebruikscode xsi:nil="true"/>\n' +
        '      <woz:codeGebouwdOngebouwd xsi:nil="true"/>\n' +
        '      <woz:meegetaxeerdeOppervlakteGebouwd xsi:nil="true"/>\n' +
        '      <woz:ozbVrijstelling xsi:nil="true"/>\n' +
        '      <woz:verantwoordelijkeGemeente>\n' +
        '        <bg:gemeenteCode xsi:nil="true"/>\n' +
        '        <bg:gemeenteNaam xsi:nil="true"/>\n' +
        '      </woz:verantwoordelijkeGemeente>\n' +
        '      <woz:soortObjectCode xsi:nil="true"/>\n' +
        '      <woz:wozObjectGeometrie xsi:nil="true"/>\n' +
        '      <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '      <woz:ingangsdatumObject xsi:nil="true"/>\n' +
        '      <woz:einddatumObject xsi:nil="true"/>\n' +
        '      <stuf:tijdvakGeldigheid>\n' +
        '        <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '        <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '      </stuf:tijdvakGeldigheid>\n' +
        '      <stuf:tijdstipRegistratie xsi:nil="true"/>\n';

    constructor(cb: Checkbox [], sortering: Sortering, fields: Array<Keyvalue>) {

        this.ontleentAanduidingAan = false;
        this.isVerbondenMet = false;
        this.bevatKadastraleObjecten = false;
        this.heeftAlsAanduiding = false;
        this.heeftPand = false;
        this.heeftSluimerendObject = false;
        this.heeftBelanghebbende = false;
        this.ligtIn = false;

        this.sortering = sortering;
        this.fields = fields;

        for (var i = 0; cb && i < cb.length; i++) {
            switch (cb[i].name) {
                case 'ontleentAanduidingAan' :
                    this.ontleentAanduidingAan = true;
                    break;
                case 'isVerbondenMet' :
                    this.isVerbondenMet = true;
                    break;
                case 'bevatKadastraleObjecten' :
                    this.bevatKadastraleObjecten = true;
                    break;
                case 'heeftAlsAanduiding' :
                    this.heeftAlsAanduiding = true;
                    break;
                case 'heeftPand' :
                    this.heeftPand = true;
                    break;
                case 'heeftSluimerendObject' :
                    this.heeftSluimerendObject = true;
                    break;
                case 'heeftBelanghebbende':
                    this.heeftBelanghebbende = true;
                    break;
                case 'ligtIn':
                    this.ligtIn = true;
                    break;
                default:
            }
        }

        this.xmlString = this.makeText();
    }

    public makeText() {
        //console.log('wozbuilder - ontleentAanduidingAan: ' + this.ontleentAanduidingAan);

        var criteria: string = '';

        if (this.sortering) {
            switch (this.sortering.id) {
                case  1: // ['wozObjectNummer']),
                    criteria = this.makeCriteriaWozObjectNummer();
                    break;
                case  2: // ['identificatie ontleentaanduidingaan']),
                    criteria = this.makeCriteriaOntleentAanduidingAan();
                    break;
                case  3: // ['aoa.identificatie']),
                    criteria = this.makeCriteriaAanduidingWOZObject01();
                    break;
                case  4: // ['aoa.postcode', 'aoa.huisnummer', 'aoa.huisletter', 'aoa.huisnummertoevoeging']),
                    criteria = this.makeCriteriaAanduidingWOZObject02();
                    break;
                case  5: // ['wpl.woonplaatsNaam', 'gor.openbareRuimteNaam', 'aoa.huisnummer', 'aoa.huisletter','aoa.huisnummertoevoeging']),
                    criteria = this.makeCriteriaAanduidingWOZObject03();
                    break;
                case  6: // ['wpl.woonplaatsNaam', 'gor.openbareRuimteNaam', 'locatieOmschrijving']),
                    criteria = this.makeCriteriaAanduidingWOZObject04();
                    break;
                case  7: // ['kadastraleIdentificatie']),
                    criteria = this.makeCriteriaKadastraleIdentificatie();
                    break;
                case  8: // ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
                    criteria = this.makeCriteriaKadastraleAanduiding01();
                    break;
                case  9: // ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer']),
                    criteria = this.makeCriteriaKadastraleAanduiding01();
                    break;
                case 10: // ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'kdp.deelperceelNummer']),
                    criteria = this.makeCriteriaKadastraleAanduiding02();
                    break;
                case 11: // ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'apr.appartementsindex']),
                    criteria = this.makeCriteriaKadastraleAanduiding03();
                    break;
                case 12: // ['bsVesNummerOfId', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
                    criteria = this.makeCriteriaSubject01();
                    break;
                case 13: // ['naam', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
                    criteria = this.makeCriteriaSubject02();
                    break;
                case 14: // ['postcode', 'huisnummer', 'huisletter', 'huisnummertoevoeging', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
                    break;
                case 15: // ['postcode', 'postadresnummer', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
                    break;
                case 16: // ['landnaam', 'sub.adresBuitenland1', 'sub.adresBuitenland2', 'sub.adresBuitenland3', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
                    break;
                case 17: // ['landcode', 'sub.adresBuitenland1', 'sub.adresBuitenland2', 'sub.adresBuitenland3', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
                    break;
                case 18: // ['gebruikscode', 'wpl.woonplaatsnaam', 'gor.openbareruimteNaam', 'aoa.huisnummer', 'aoa.huisletter', 'aoa.huisnummertoevoeging']),
                    break;
                case 20: // ['wozObjectnummer', 'wozObjectnummer']),
                    break;
                case 24: // ['identificatie isVerbondenMet']),
                    break;
                case 25: // ['identificatie heeftPand']),
                    break;
                case 26: // ['identificatie heeftAlsAanduiding']),
                    break;
                case 27: // ['gemeenteCode']),
                    break;
                case 28: // ['betrokkenWaterschap'])
                    break;
                default:
            }
        }

        this.xmlString = this.xmlString01 +
            criteria +
            this.xmlString02 +
            this.getOntleentAanduidingAan() +
            this.getIsVerbondenMet() +
            this.getBevatKadastraleObjecten() +
            this.getHeeftAlsAanduiding() +
            this.getHeeftPand() +
            this.getHeeftSluimerendObject() +
            this.getHeeftBelanghebbende() +
            this.getLigtIn() +
            this.xmlString03;

        return this.xmlString;
    }

    public getOntleentAanduidingAan() {
        var t: string;
        if (this.ontleentAanduidingAan) {
            t = '      <woz:ontleentAanduidingAan stuf:entiteittype="WOZAOTAND">\n' +
                '        <woz:gerelateerde>\n' +
                '          <bg:ligplaats stuf:entiteittype="LIG">\n' +
                '            <bg:identificatie xsi:nil="true"/>\n' +
                '            <bg:adresAanduidingGrp>\n' +
                '              <bg:num.identificatie xsi:nil="true"/>\n' +
                '              <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '              <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '              <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '              <bg:aoa.postcode xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '              <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '            </bg:adresAanduidingGrp>\n' +
                '          </bg:ligplaats>\n' +
                '          <bg:standplaats stuf:entiteittype="STA">\n' +
                '            <bg:identificatie xsi:nil="true"/>\n' +
                '            <bg:adresAanduidingGrp>\n' +
                '              <bg:num.identificatie xsi:nil="true"/>\n' +
                '              <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '              <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '              <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '              <bg:aoa.postcode xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '              <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '            </bg:adresAanduidingGrp>\n' +
                '          </bg:standplaats>\n' +
                '          <bg:verblijfsobject stuf:entiteittype="VBO">\n' +
                '            <bg:identificatie xsi:nil="true"/>\n' +
                '            <bg:adresAanduidingGrp>\n' +
                '              <bg:num.identificatie xsi:nil="true"/>\n' +
                '              <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '              <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '              <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '              <bg:aoa.postcode xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '              <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '            </bg:adresAanduidingGrp>\n' +
                '          </bg:verblijfsobject>\n' +
                '        </woz:gerelateerde>\n' +
                '        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
                '        <stuf:tijdvakRelatie>\n' +
                '          <stuf:beginRelatie xsi:nil="true"/>\n' +
                '          <stuf:eindRelatie xsi:nil="true"/>\n' +
                '        </stuf:tijdvakRelatie>\n' +
                '        <stuf:tijdvakGeldigheid>\n' +
                '          <stuf:beginGeldigheid xsi:nil="true"/>\n' +
                '          <stuf:eindGeldigheid xsi:nil="true"/>\n' +
                '        </stuf:tijdvakGeldigheid>\n' +
                '        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
                '      </woz:ontleentAanduidingAan>\n';
        } else {
            t = '';
        }
        return t;
    }

    public getIsVerbondenMet() {
        var t: string;
        if (this.isVerbondenMet) {
            t = '      <woz:isVerbondenMet stuf:entiteittype="WOZAOTOND">\n' +
                '        <woz:gerelateerde>\n' +
                '          <bg:ligplaats stuf:entiteittype="LIG">\n' +
                '            <bg:identificatie xsi:nil="true"/>\n' +
                '            <bg:adresAanduidingGrp>\n' +
                '              <bg:num.identificatie xsi:nil="true"/>\n' +
                '              <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '              <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '              <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '              <bg:aoa.postcode xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '              <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '            </bg:adresAanduidingGrp>\n' +
                '          </bg:ligplaats>\n' +
                '          <bg:standplaats stuf:entiteittype="STA">\n' +
                '            <bg:identificatie xsi:nil="true"/>\n' +
                '            <bg:adresAanduidingGrp>\n' +
                '              <bg:num.identificatie xsi:nil="true"/>\n' +
                '              <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '              <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '              <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '              <bg:aoa.postcode xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '              <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '            </bg:adresAanduidingGrp>\n' +
                '          </bg:standplaats>\n' +
                '          <bg:verblijfsobject stuf:entiteittype="VBO">\n' +
                '            <bg:identificatie xsi:nil="true"/>\n' +
                '            <bg:adresAanduidingGrp>\n' +
                '              <bg:num.identificatie xsi:nil="true"/>\n' +
                '              <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '              <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '              <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '              <bg:aoa.postcode xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '              <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '              <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '            </bg:adresAanduidingGrp>\n' +
                '          </bg:verblijfsobject>\n' +
                '        </woz:gerelateerde>\n' +
                '        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
                '        <stuf:tijdvakRelatie>\n' +
                '          <stuf:beginRelatie xsi:nil="true"/>\n' +
                '          <stuf:eindRelatie xsi:nil="true"/>\n' +
                '        </stuf:tijdvakRelatie>\n' +
                '        <stuf:tijdvakGeldigheid>\n' +
                '          <stuf:beginGeldigheid xsi:nil="true"/>\n' +
                '          <stuf:eindGeldigheid xsi:nil="true"/>\n' +
                '        </stuf:tijdvakGeldigheid>\n' +
                '        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
                '      </woz:isVerbondenMet>\n';
        } else {
            t = '';
        }
        return t;
    }

    public getBevatKadastraleObjecten() {
        var t: string;
        if (this.bevatKadastraleObjecten) {
            t = '      <woz:bevatKadastraleObjecten stuf:entiteittype="WOZKOZ">\n' +
                '        <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '          <bg:kadastraleIdentificatie xsi:nil="true"/>\n' +
                '          <bg:kadastraleAanduiding>\n' +
                '            <bg:kadastraleGemeentecode xsi:nil="true"/>\n' +
                '            <bg:kadastraleSectie xsi:nil="true"/>\n' +
                '            <bg:kadastraalPerceelnummer xsi:nil="true"/>\n' +
                '            <bg:kdp.deelperceelNummer xsi:nil="true"/>\n' +
                '            <bg:apr.appartementsIndex xsi:nil="true"/>\n' +
                '          </bg:kadastraleAanduiding>\n' +
                '          <bg:ingangsdatumObject xsi:nil="true"/>\n' +
                '          <bg:einddatumObject xsi:nil="true"/>\n' +
                '        </woz:gerelateerde>\n' +
                '        <woz:toegekendeOppervlakte xsi:nil="true"/>\n' +
                '        <woz:meegetaxeerdeOppervlakte xsi:nil="true"/>\n' +
                '        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
                '        <stuf:tijdvakRelatie>\n' +
                '          <stuf:beginRelatie xsi:nil="true"/>\n' +
                '          <stuf:eindRelatie xsi:nil="true"/>\n' +
                '        </stuf:tijdvakRelatie>\n' +
                '        <stuf:tijdvakGeldigheid>\n' +
                '          <stuf:beginGeldigheid xsi:nil="true"/>\n' +
                '          <stuf:eindGeldigheid xsi:nil="true"/>\n' +
                '        </stuf:tijdvakGeldigheid>\n' +
                '        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
                '      </woz:bevatKadastraleObjecten>\n';
        } else {
            t = '';
        }
        return t;
    }

    public getHeeftAlsAanduiding() {
        var t: string;
        if (this.heeftAlsAanduiding) {
            t = '      <woz:heeftAlsAanduiding stuf:entiteittype="WOZNUM">\n' +
                '        <woz:gerelateerde stuf:entiteittype="NUM">\n' +
                '          <bg:identificatie xsi:nil="true"/>\n' +
                '          <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '          <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '          <bg:huisnummer xsi:nil="true"/>\n' +
                '          <bg:huisletter xsi:nil="true"/>\n' +
                '          <bg:huisnummertoevoeging xsi:nil="true"/>\n' +
                '          <bg:postcode xsi:nil="true"/>\n' +
                '          <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '          <bg:ingangsdatumObject xsi:nil="true"/>\n' +
                '          <bg:einddatumObject xsi:nil="true"/>\n' +
                '        </woz:gerelateerde>\n' +
                '        <woz:locatieOmschrijving xsi:nil="true"/>\n' +
                '        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
                '        <stuf:tijdvakRelatie>\n' +
                '          <stuf:beginRelatie xsi:nil="true"/>\n' +
                '          <stuf:eindRelatie xsi:nil="true"/>\n' +
                '        </stuf:tijdvakRelatie>\n' +
                '        <stuf:tijdvakGeldigheid>\n' +
                '          <stuf:beginGeldigheid xsi:nil="true"/>\n' +
                '          <stuf:eindGeldigheid xsi:nil="true"/>\n' +
                '        </stuf:tijdvakGeldigheid>\n' +
                '        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
                '      </woz:heeftAlsAanduiding>\n';
        } else {
            t = '';
        }
        return t;
    }

    public getHeeftPand() {
        var t: string;
        if (this.heeftPand) {
            t = '      <woz:heeftPand stuf:entiteittype="WOZPND">\n' +
                '        <woz:gerelateerde stuf:entiteittype="PND">\n' +
                '          <bg:identificatie xsi:nil="true"/>\n' +
                '          <bg:ingangsdatumObject xsi:nil="true"/>\n' +
                '          <bg:einddatumObject xsi:nil="true"/>\n' +
                '        </woz:gerelateerde>\n' +
                '        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
                '        <stuf:tijdvakRelatie>\n' +
                '          <stuf:beginRelatie xsi:nil="true"/>\n' +
                '          <stuf:eindRelatie xsi:nil="true"/>\n' +
                '        </stuf:tijdvakRelatie>\n' +
                '        <stuf:tijdvakGeldigheid>\n' +
                '          <stuf:beginGeldigheid xsi:nil="true"/>\n' +
                '          <stuf:eindGeldigheid xsi:nil="true"/>\n' +
                '        </stuf:tijdvakGeldigheid>\n' +
                '        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
                '      </woz:heeftPand>\n';
        } else {
            t = '';
        }
        return t;
    }

    public getHeeftSluimerendObject() {
        var t: string;
        if (this.heeftSluimerendObject) {
            t = '      <woz:heeftSluimerendObject stuf:entiteittype="WOZSWO">\n' +
                '        <woz:gerelateerde stuf:entiteittype="SWO">\n' +
                '          <woz:wozObjectNummer xsi:nil="true"/>\n' +
                '        </woz:gerelateerde>\n' +
                '        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
                '        <stuf:tijdvakRelatie>\n' +
                '          <stuf:beginRelatie xsi:nil="true"/>\n' +
                '          <stuf:eindRelatie xsi:nil="true"/>\n' +
                '        </stuf:tijdvakRelatie>\n' +
                '        <stuf:tijdvakGeldigheid>\n' +
                '          <stuf:beginGeldigheid xsi:nil="true"/>\n' +
                '          <stuf:eindGeldigheid xsi:nil="true"/>\n' +
                '        </stuf:tijdvakGeldigheid>\n' +
                '        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
                '      </woz:heeftSluimerendObject>\n';
        } else {
            t = '';
        }
        return t;
    }

    public getHeeftBelanghebbende() {
        var t: string;
        if (this.heeftBelanghebbende) {
            t = '      <woz:heeftBelanghebbende stuf:entiteittype="WOZSUB">\n' +
                '        <woz:gerelateerde>\n' +
                '          <woz:natuurlijkPersoon stuf:entiteittype="NPS">\n' +
                '            <woz:isEen stuf:entiteittype="NPSNPS">\n' +
                '              <woz:gerelateerde stuf:entiteittype="NPS">\n' +
                '                <bg:inp.bsn xsi:nil="true"/>\n' +
                '                <bg:anp.identificatie xsi:nil="true"/>\n' +
                '                <bg:geslachtsnaam xsi:nil="true"/>\n' +
                '                <bg:voorvoegselGeslachtsnaam xsi:nil="true"/>\n' +
                '                <bg:voorletters xsi:nil="true"/>\n' +
                '                <bg:aanduidingNaamgebruik xsi:nil="true"/>\n' +
                '                <bg:geslachtsnaamPartner xsi:nil="true"/>\n' +
                '                <bg:voorvoegselGeslachtsnaamPartner xsi:nil="true"/>\n' +
                '                <bg:aanhefAanschrijving xsi:nil="true"/>\n' +
                '                <bg:geslachtsnaamAanschrijving xsi:nil="true"/>\n' +
                '                <bg:geslachtsaanduiding xsi:nil="true"/>\n' +
                '                <bg:geboortedatum xsi:nil="true"/>\n' +
                '                <bg:overlijdensdatum xsi:nil="true"/>\n' +
                '                <bg:inp.verblijftIn stuf:entiteittype="NPSTGO">\n' +
                '                  <bg:gerelateerde stuf:entiteittype="TGO">\n' +
                '                    <bg:identificatie xsi:nil="true"/>\n' +
                '                    <bg:adresAanduidingGrp>\n' +
                '                      <bg:num.identificatie xsi:nil="true"/>\n' +
                '                      <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '                      <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '                      <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '                      <bg:aoa.postcode xsi:nil="true"/>\n' +
                '                      <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '                      <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '                      <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '                    </bg:adresAanduidingGrp>\n' +
                '                  </bg:gerelateerde>\n' +
                '                </bg:inp.verblijftIn>\n' +
                '                <bg:verblijfsadres>\n' +
                '                  <bg:aoa.identificatie xsi:nil="true"/>\n' +
                '                  <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '                  <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '                  <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '                  <bg:aoa.postcode xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '                  <bg:inp.locatiebeschrijving xsi:nil="true"/>\n' +
                '                </bg:verblijfsadres>\n' +
                '                <bg:sub.verblijfBuitenland>\n' +
                '                  <bg:lnd.landcode xsi:nil="true"/>\n' +
                '                  <bg:lnd.landnaam xsi:nil="true"/>\n' +
                '                  <bg:sub.adresBuitenland1 xsi:nil="true"/>\n' +
                '                  <bg:sub.adresBuitenland2 xsi:nil="true"/>\n' +
                '                  <bg:sub.adresBuitenland3 xsi:nil="true"/>\n' +
                '                </bg:sub.verblijfBuitenland>\n' +
                '                <bg:sub.correspondentieAdres>\n' +
                '                  <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '                  <bg:postcode xsi:nil="true"/>\n' +
                '                  <bg:aoa.identificatie xsi:nil="true"/>\n' +
                '                  <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '                  <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '                  <bg:sub.postadresType xsi:nil="true"/>\n' +
                '                  <bg:sub.postadresNummer xsi:nil="true"/>\n' +
                '                </bg:sub.correspondentieAdres>\n' +
                '                <bg:inp.indicatieGeheim xsi:nil="true"/>\n' +
                '              </woz:gerelateerde>\n' +
                '            </woz:isEen>\n' +
                '            <woz:soFiNummer xsi:nil="true"/>\n' +
                '            <woz:aanvullingSoFiNummer xsi:nil="true"/>\n' +
                '            <woz:verantwoordelijkeGemeente xsi:nil="true"/>\n' +
                '            <woz:datumEindeSynchronisatie xsi:nil="true"/>\n' +
                '          </woz:natuurlijkPersoon>\n' +
                '          <woz:nietNatuurlijkPersoon stuf:entiteittype="NNP">\n' +
                '            <woz:isEen stuf:entiteittype="NNPNNP">\n' +
                '              <woz:gerelateerde stuf:entiteittype="NNP">\n' +
                '                <bg:inn.nnpId xsi:nil="true"/>\n' +
                '                <bg:ann.identificatie xsi:nil="true"/>\n' +
                '                <bg:statutaireNaam xsi:nil="true"/>\n' +
                '                <bg:sub.correspondentieAdres>\n' +
                '                  <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '                  <bg:postcode xsi:nil="true"/>\n' +
                '                  <bg:aoa.identificatie xsi:nil="true"/>\n' +
                '                  <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '                  <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '                  <bg:sub.postadresType xsi:nil="true"/>\n' +
                '                  <bg:sub.postadresNummer xsi:nil="true"/>\n' +
                '                </bg:sub.correspondentieAdres>\n' +
                '                <bg:sub.verblijfBuitenland>\n' +
                '                  <bg:lnd.landcode xsi:nil="true"/>\n' +
                '                  <bg:lnd.landnaam xsi:nil="true"/>\n' +
                '                  <bg:sub.adresBuitenland1 xsi:nil="true"/>\n' +
                '                  <bg:sub.adresBuitenland2 xsi:nil="true"/>\n' +
                '                  <bg:sub.adresBuitenland3 xsi:nil="true"/>\n' +
                '                </bg:sub.verblijfBuitenland>\n' +
                '                <bg:rps.isEigenaarVan stuf:entiteittype="NNPMAC">\n' +
                '                  <bg:gerelateerde stuf:entiteittype="MAC">\n' +
                '                    <bg:kvkNummer xsi:nil="true"/>\n' +
                '                  </bg:gerelateerde>\n' +
                '                </bg:rps.isEigenaarVan>\n' +
                '              </woz:gerelateerde>\n' +
                '            </woz:isEen>\n' +
                '            <woz:aanvullingSoFiNummer xsi:nil="true"/>\n' +
                '            <woz:verantwoordelijkeGemeente xsi:nil="true"/>\n' +
                '            <woz:datumEindeSynchronisatie xsi:nil="true"/>\n' +
                '          </woz:nietNatuurlijkPersoon>\n' +
                '          <woz:vestiging stuf:entiteittype="VES">\n' +
                '            <woz:isEen stuf:entiteittype="VESVES">\n' +
                '              <woz:gerelateerde stuf:entiteittype="VES">\n' +
                '                <bg:vestigingsNummer xsi:nil="true"/>\n' +
                '                <bg:handelsnaam xsi:nil="true"/>\n' +
                '                <bg:verblijfsadres>\n' +
                '                  <bg:aoa.identificatie xsi:nil="true"/>\n' +
                '                  <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '                  <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '                  <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '                  <bg:aoa.postcode xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '                  <bg:inp.locatiebeschrijving xsi:nil="true"/>\n' +
                '                </bg:verblijfsadres>\n' +
                '                <bg:sub.verblijfBuitenland>\n' +
                '                  <bg:lnd.landcode xsi:nil="true"/>\n' +
                '                  <bg:lnd.landnaam xsi:nil="true"/>\n' +
                '                  <bg:sub.adresBuitenland1 xsi:nil="true"/>\n' +
                '                  <bg:sub.adresBuitenland2 xsi:nil="true"/>\n' +
                '                  <bg:sub.adresBuitenland3 xsi:nil="true"/>\n' +
                '                </bg:sub.verblijfBuitenland>\n' +
                '                <bg:sub.correspondentieAdres>\n' +
                '                  <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '                  <bg:postcode xsi:nil="true"/>\n' +
                '                  <bg:aoa.identificatie xsi:nil="true"/>\n' +
                '                  <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '                  <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '                  <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '                  <bg:sub.postadresType xsi:nil="true"/>\n' +
                '                  <bg:sub.postadresNummer xsi:nil="true"/>\n' +
                '                </bg:sub.correspondentieAdres>\n' +
                '                <bg:oefentActiviteitenUitVoor stuf:entiteittype="VESMAC">\n' +
                '                  <bg:gerelateerde stuf:entiteittype="MAC">\n' +
                '                    <bg:kvkNummer xsi:nil="true"/>\n' +
                '                  </bg:gerelateerde>\n' +
                '                </bg:oefentActiviteitenUitVoor>\n' +
                '                <bg:heeftAlsHoofdLocatie stuf:entiteittype="VESTGOHFD">\n' +
                '                  <bg:gerelateerde stuf:entiteittype="TGO">\n' +
                '                    <bg:identificatie xsi:nil="true"/>\n' +
                '                    <bg:adresAanduidingGrp>\n' +
                '                      <bg:num.identificatie xsi:nil="true"/>\n' +
                '                      <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
                '                      <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
                '                      <bg:gor.straatnaam xsi:nil="true"/>\n' +
                '                      <bg:aoa.postcode xsi:nil="true"/>\n' +
                '                      <bg:aoa.huisnummer xsi:nil="true"/>\n' +
                '                      <bg:aoa.huisletter xsi:nil="true"/>\n' +
                '                      <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
                '                    </bg:adresAanduidingGrp>\n' +
                '                  </bg:gerelateerde>\n' +
                '                </bg:heeftAlsHoofdLocatie>\n' +
                '              </woz:gerelateerde>\n' +
                '            </woz:isEen>\n' +
                '            <woz:soFiNummer xsi:nil="true"/>\n' +
                '            <woz:aanvullingSoFiNummer xsi:nil="true"/>\n' +
                '            <woz:verantwoordelijkeGemeente xsi:nil="true"/>\n' +
                '            <woz:datumEindeSynchronisatie xsi:nil="true"/>\n' +
                '          </woz:vestiging>\n' +
                '        </woz:gerelateerde>\n' +
                '        <woz:aanduidingEigenaarGebruiker xsi:nil="true"/>\n' +
                '        <woz:statusBelang xsi:nil="true"/>\n' +
                '        <woz:avr.aard xsi:nil="true"/>\n' +
                '        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
                '        <stuf:tijdvakRelatie>\n' +
                '          <stuf:beginRelatie xsi:nil="true"/>\n' +
                '          <stuf:eindRelatie xsi:nil="true"/>\n' +
                '        </stuf:tijdvakRelatie>\n' +
                '        <stuf:tijdvakGeldigheid>\n' +
                '          <stuf:beginGeldigheid xsi:nil="true"/>\n' +
                '          <stuf:eindGeldigheid xsi:nil="true"/>\n' +
                '        </stuf:tijdvakGeldigheid>\n' +
                '        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
                '      </woz:heeftBelanghebbende>\n';
        } else {
            t = '';
        }
        return t;
    }

    public getLigtIn() {
        var t: string;
        if (this.ligtIn) {
            t = '      <woz:ligtIn stuf:entiteittype="WOZWSP">\n' +
                '        <woz:gerelateerde stuf:entiteittype="WSP">\n' +
                '          <woz:betrokkenWaterschap>2343</woz:betrokkenWaterschap>\n' +
                '          <woz:waterschapNaam/>\n' +
                '        </woz:gerelateerde>\n' +
                '      </woz:ligtIn>\n';
        } else {
            t = '';
        }
        return t;
    }

    private makeCriteriaWozObjectNummer() {
        var criteria: string;

        if (!this.fields[0].maxvalue || this.fields[0].maxvalue.length == 0) {
            // gelijk
            criteria = '    <woz:gelijk stuf:entiteittype="WOZ">\n' +
                '        <woz:wozObjectNummer>' + this.fields[0].value + '</woz:wozObjectNummer>\n' +
                '    </woz:gelijk>\n';
        } else {
            // vanaf en t/m
            criteria = '    <woz:vanaf stuf:entiteittype="WOZ">\n' +
                '        <woz:wozObjectNummer>' + this.fields[0].value + '</woz:wozObjectNummer>\n' +
                '    </woz:vanaf>\n' +
                '    <woz:totEnMet stuf:entiteittype="WOZ">\n' +
                '        <woz:wozObjectNummer>' + this.fields[0].maxvalue + '</woz:wozObjectNummer>\n' +
                '    </woz:totEnMet>\n';
        }
        return criteria;
    }

    private makeCriteriaOntleentAanduidingAan() {
        var criteria: string;

        if (!this.fields[0].maxvalue || this.fields[0].maxvalue.length == 0) {
            // gelijk
            criteria = '    </woz:gelijk>\n' +
                '        <woz:ontleentAanduidingAan stuf:entiteittype="WOZAOTAND">\n' +
                '            <woz:gerelateerde stuf:entiteittype="AOT">\n' +
                '                <bg:identificatie>' + this.fields[0].value + '</bg:identificatie>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:ontleentAanduidingAan>\n' +
                '    </woz:gelijk>\n';
        } else {
            // vanaf en t/m
            criteria = '    <woz:vanaf stuf:entiteittype="WOZ">\n' +
                '        <woz:ontleentAanduidingAan stuf:entiteittype="WOZAOTAND">\n' +
                '            <woz:gerelateerde stuf:entiteittype="AOT">\n' +
                '                <bg:identificatie>' + this.fields[0].value + '</bg:identificatie>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:ontleentAanduidingAan>' +
                '    </woz:vanaf>\n' +
                '    <woz:totEnMet stuf:entiteittype="WOZ">\n' +
                '        <woz:ontleentAanduidingAan stuf:entiteittype="WOZAOTAND">\n' +
                '            <woz:gerelateerde stuf:entiteittype="AOT">\n' +
                '                <bg:identificatie>' + this.fields[0].maxvalue + '</bg:identificatie>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:ontleentAanduidingAan>' +
                '    </woz:totEnMet>\n';
        }
        return criteria;
    }

    private makeCriteriaAanduidingWOZObject01() {
        var criteria: string;

        if (!this.fields[0].maxvalue || this.fields[0].maxvalue.length == 0) {
            // gelijk
            criteria = '    <woz:gelijk stuf:entiteittype="WOZ">\n' +
                '        <woz:aanduidingWOZobject>\n' +
                '            <bg:aoa.identificatie>' + this.fields[0].value + '</bg:aoa.identificatie>\n' +
                '        </woz:aanduidingWOZobject>\n' +
                '    </woz:gelijk>\n';
        } else {
            // vanaf en t/m
            criteria = '    <woz:vanaf stuf:entiteittype="WOZ">\n' +
                '        <woz:aanduidingWOZobject>\n' +
                '            <bg:aoa.identificatie>' + this.fields[0].value + '</bg:aoa.identificatie>\n' +
                '        </woz:aanduidingWOZobject>\n'  +
                '    </woz:vanaf>\n' +
                '    <woz:totEnMet stuf:entiteittype="WOZ">\n' +
                '        <woz:aanduidingWOZobject>\n' +
                '            <bg:aoa.identificatie>' + this.fields[0].maxvalue +'</bg:aoa.identificatie>\n' +
                '        </woz:aanduidingWOZobject>\n' +
                '    </woz:totEnMet>\n';
        }
        return criteria;
    }

    private makeCriteriaAanduidingWOZObject02() {
        var criteria: string;

        var omvatkadaand = '       <woz:aanduidingWOZobject>\n';
        var omvataand = '       </woz:aanduidingWOZobject>\n';

        var gelijkBegin: string = '   <woz:gelijk stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var gelijkEind: string = omvataand + '    </woz:gelijk>\n';

        var vanafBegin: string = '   <woz:vanaf stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var vanafEind: string = omvataand + '    </woz:vanaf>\n';

        var tmBegin: string = '   <woz:totEnMet stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var tmEind: string = omvataand + '    </woz:totEnMet>\n';

        var gelijk: string = '';
        var vanaf: string = '';
        var tm: string = '';

        // Voor elk veld
        // bepaal of
        // - alleen field.value is ingevuld, dan toevoegen bij gelijk
        // - field.value en field.maxvalue zijn ingevuld, dan toevoegen bij vanaf en t/m
        //
        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i] && this.fields[i].value && this.fields[i].value.length > 0) {
                switch (i) {
                    case 0: //aoa.postcode
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '           <bg:aoa.postcode>' +
                                this.fields[i].value +
                                '</bg:aoa.postcode>\n';
                            tm += '           <bg:aoa.postcode>' +
                                this.fields[i].maxvalue +
                                '</bg:aoa.postcode>\n';
                        } else {
                            gelijk += '           <bg:aoa.postcode>' +
                                this.fields[i].value +
                                '</bg:aoa.postcode>\n';
                        }
                        break;
                    case 1: // aoa.huisnummer
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '           <bg:aoa.huisnummer>' +
                                this.fields[i].value +
                                '</bg:aoa.huisnummer>\n';
                            tm += '           <bg:aoa.huisnummer>' +
                                this.fields[i].maxvalue +
                                '</bg:aoa.huisnummer>\n';
                        } else {
                            gelijk += '           <bg:aoa.huisnummer>' +
                                this.fields[i].value +
                                '</bg:aoa.huisnummer>\n';
                        }

                        break;
                    case 2: // aoa.huisletter
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '           <bg:aoa.huisletter>' +
                                this.fields[i].value + '</bg:aoa.huisletter>\n';
                            tm += '           <bg:aoa.huisletter>' +
                                this.fields[i].maxvalue + '</bg:aoa.huisletter>\n';
                        } else {
                            gelijk += '           <bg:aoa.huisletter>' +
                                this.fields[i].value +
                                '</bg:aoa.huisletter>\n';
                        }
                        break;
                    case 3: // aoa.huisnummertoevoeging
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '           <bg:aoa.huisnummertoevoeging>' +
                                this.fields[i].value +
                                '</bg:aoa.huisnummertoevoeging>\n';
                            tm += '           <bg:aoa.huisnummertoevoeging>' +
                                this.fields[i].maxvalue +
                                '</bg:aoa.huisnummertoevoeging>\n';
                        } else {
                            gelijk += '           <bg:aoa.huisnummertoevoeging>' +
                                this.fields[i].value +
                                '</bg:aoa.huisnummertoevoeging>\n';
                        }
                        break;
                    default:
                }
            }
        }

        var c1: string = '';
        var c2: string = '';

        if (gelijk.length > 0) {
            c1 = gelijkBegin + gelijk + gelijkEind;
        }
        if ((vanaf.length > 0) && (tm.length > 0)) {
            c2 = vanafBegin + vanaf + vanafEind + tmBegin + tm + tmEind;
        }
        console.log('c1: ' + c1 + '\nc2: ' + c2 + '\ncriteria: ' + criteria);
        criteria = c1 + c2;
        return criteria;
    }


    /*
  <woz:gelijk stuf:entiteittype="WOZ">
      <woz:wozObjectNummer>122334455667</woz:wozObjectNummer>
      <woz:aanduidingWOZobject>
          <bg:aoa.identificatie>0000000122334456</bg:aoa.identificatie>
          <bg:wpl.woonplaatsNaam>
          <bg:aoa.postcode>9999AA</bg:aoa.postcode>
          <bg:gor.openbareRuimteNaam>
          <bg:aoa.huisnummer>1</bg:aoa.huisnummer>
          <bg:aoa.huisletter>A</bg:aoa.huisletter>
          <bg:aoa.huisnummertoevoeging>
          <bg:locatieOmschrijving/>
      </woz:aanduidingWOZobject>
  </woz:gelijk>
   */
    // ['wpl.woonplaatsNaam', 'gor.openbareRuimteNaam', 'aoa.huisnummer', 'aoa.huisletter',
    //         'aoa.huisnummertoevoeging']
    private makeCriteriaAanduidingWOZObject03() {
        var criteria: string;

        var omvatkadaand = '       <woz:aanduidingWOZobject>\n';
        var omvataand = '       </woz:aanduidingWOZobject>\n';

        var gelijkBegin: string = '   <woz:gelijk stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var gelijkEind: string = omvataand + '    </woz:gelijk>\n';

        var vanafBegin: string = '   <woz:vanaf stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var vanafEind: string = omvataand + '    </woz:vanaf>\n';

        var tmBegin: string = '   <woz:totEnMet stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var tmEind: string = omvataand + '    </woz:totEnMet>\n';

        var gelijk: string = '';
        var vanaf: string = '';
        var tm: string = '';

        // Voor elk veld
        // bepaal of
        // - alleen field.value is ingevuld, dan toevoegen bij gelijk
        // - field.value en field.maxvalue zijn ingevuld, dan toevoegen bij vanaf en t/m
        //
        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i] && this.fields[i].value && this.fields[i].value.length > 0) {
                switch (i) {
                    case 0: // wpl.woonplaatsNaam
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '          <bg:wpl.woonplaatsNaam>' +
                                this.fields[i].value +
                                '</bg:wpl.woonplaatsNaam>\n';
                            tm += '          <bg:wpl.woonplaatsNaam>' +
                                this.fields[i].maxvalue +
                                '</bg:wpl.woonplaatsNaam>\n';
                        } else {
                            gelijk += '          <bg:wpl.woonplaatsNaam>' +
                                this.fields[i].value +
                                '</bg:wpl.woonplaatsNaam>\n';
                        }
                        break;
                    case 1: // gor.openbareRuimteNaam
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '          <bg:gor.openbareRuimteNaam>' +
                                this.fields[i].value +
                                '</bg:gor.openbareRuimteNaam>\n';
                            tm += '          <bg:gor.openbareRuimteNaam>' +
                                this.fields[i].maxvalue +
                                '</bg:gor.openbareRuimteNaam>\n';
                        } else {
                            gelijk += '          <bg:gor.openbareRuimteNaam>' +
                                this.fields[i].value +
                                '</bg:gor.openbareRuimteNaam>\n';
                        }
                        break;
                    case 2: // aoa.huisnummer
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '           <bg:aoa.huisnummer>' +
                                this.fields[i].value +
                                '</bg:aoa.huisnummer>\n';
                            tm += '           <bg:aoa.huisnummer>' +
                                this.fields[i].maxvalue +
                                '</bg:aoa.huisnummer>\n';
                        } else {
                            gelijk += '           <bg:aoa.huisnummer>' +
                                this.fields[i].value +
                                '</bg:aoa.huisnummer>\n';
                        }
                        break;
                    case 3: // aoa.huisletter
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '           <bg:aoa.huisletter>' +
                                this.fields[i].value + '</bg:aoa.huisletter>\n';
                            tm += '           <bg:aoa.huisletter>' +
                                this.fields[i].maxvalue + '</bg:aoa.huisletter>\n';
                        } else {
                            gelijk += '           <bg:aoa.huisletter>' +
                                this.fields[i].value +
                                '</bg:aoa.huisletter>\n';
                        }
                        break;
                    case 4: // aoa.huisnummertoevoeging
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '           <bg:aoa.huisnummertoevoeging>' +
                                this.fields[i].value +
                                '</bg:aoa.huisnummertoevoeging>\n';
                            tm += '           <bg:aoa.huisnummertoevoeging>' +
                                this.fields[i].maxvalue +
                                '</bg:aoa.huisnummertoevoeging>\n';
                        } else {
                            gelijk += '           <bg:aoa.huisnummertoevoeging>' +
                                this.fields[i].value +
                                '</bg:aoa.huisnummertoevoeging>\n';
                        }
                        break;
                    default:
                }
            }
        }

        var c1: string = '';
        var c2: string = '';

        if (gelijk.length > 0) {
            c1 = gelijkBegin + gelijk + gelijkEind;
        }
        if ((vanaf.length > 0) && (tm.length > 0)) {
            c2 = vanafBegin + vanaf + vanafEind + tmBegin + tm + tmEind;
        }
        console.log('c1: ' + c1 + '\nc2: ' + c2 + '\ncriteria: ' + criteria);
        criteria = c1 + c2;
        return criteria;
    }

    // ['wpl.woonplaatsNaam', 'gor.openbareRuimteNaam', 'locatieOmschrijving']),

    /*
  <woz:gelijk stuf:entiteittype="WOZ">
      <woz:wozObjectNummer>122334455667</woz:wozObjectNummer>
      <woz:aanduidingWOZobject>
          <bg:aoa.identificatie>0000000122334456</bg:aoa.identificatie>
          <bg:wpl.woonplaatsNaam>
          <bg:aoa.postcode>9999AA</bg:aoa.postcode>
          <bg:gor.openbareRuimteNaam>
          <bg:aoa.huisnummer>1</bg:aoa.huisnummer>
          <bg:aoa.huisletter>A</bg:aoa.huisletter>
          <bg:aoa.huisnummertoevoeging>
          <bg:locatieOmschrijving>
      </woz:aanduidingWOZobject>
  </woz:gelijk>
   */
    // ['wpl.woonplaatsNaam', 'gor.openbareRuimteNaam', 'locatieOmschrijving']),
    private makeCriteriaAanduidingWOZObject04() {
        var criteria: string;

        var omvatkadaand = '       <woz:aanduidingWOZobject>\n';
        var omvataand = '       </woz:aanduidingWOZobject>\n';

        var gelijkBegin: string = '   <woz:gelijk stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var gelijkEind: string = omvataand + '    </woz:gelijk>\n';

        var vanafBegin: string = '   <woz:vanaf stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var vanafEind: string = omvataand + '    </woz:vanaf>\n';

        var tmBegin: string = '   <woz:totEnMet stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var tmEind: string = omvataand + '    </woz:totEnMet>\n';

        var gelijk: string = '';
        var vanaf: string = '';
        var tm: string = '';

        // Voor elk veld
        // bepaal of
        // - alleen field.value is ingevuld, dan toevoegen bij gelijk
        // - field.value en field.maxvalue zijn ingevuld, dan toevoegen bij vanaf en t/m
        //
        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i] && this.fields[i].value && this.fields[i].value.length > 0) {
                switch (i) {
                    case 0: // wpl.woonplaatsNaam
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '          <bg:wpl.woonplaatsNaam>' +
                                this.fields[i].value +
                                '</bg:wpl.woonplaatsNaam>\n';
                            tm += '          <bg:wpl.woonplaatsNaam>' +
                                this.fields[i].maxvalue +
                                '</bg:wpl.woonplaatsNaam>\n';
                        } else {
                            gelijk += '          <bg:wpl.woonplaatsNaam>' +
                                this.fields[i].value +
                                '</bg:wpl.woonplaatsNaam>\n';
                        }
                        break;
                    case 1: // gor.openbareRuimteNaam
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '          <bg:gor.openbareRuimteNaam>' +
                                this.fields[i].value +
                                '</bg:gor.openbareRuimteNaam>\n';
                            tm += '          <bg:gor.openbareRuimteNaam>' +
                                this.fields[i].maxvalue +
                                '</bg:gor.openbareRuimteNaam>\n';
                        } else {
                            gelijk += '          <bg:gor.openbareRuimteNaam>' +
                                this.fields[i].value +
                                '</bg:gor.openbareRuimteNaam>\n';
                        }
                        break;
                    case 2: // locatieOmschrijving
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '          <bg:locatieOmschrijving>' +
                                this.fields[i].value +
                                '</bg:locatieOmschrijving>\n';
                            tm += '          <bg:locatieOmschrijving>' +
                                this.fields[i].maxvalue +
                                '</bg:locatieOmschrijving>\n';
                        } else {
                            gelijk += '          <bg:locatieOmschrijving>' +
                                this.fields[i].value +
                                '</bg:locatieOmschrijving>\n';
                        }
                        break;
                    default:
                }
            }
        }

        var c1: string = '';
        var c2: string = '';

        if (gelijk.length > 0) {
            c1 = gelijkBegin + gelijk + gelijkEind;
        }
        if ((vanaf.length > 0) && (tm.length > 0)) {
            c2 = vanafBegin + vanaf + vanafEind + tmBegin + tm + tmEind;
        }
        console.log('c1: ' + c1 + '\nc2: ' + c2 + '\ncriteria: ' + criteria);
        criteria = c1 + c2;
        return criteria;
    }

    private makeCriteriaKadastraleIdentificatie() {
        var criteria: string;

        if (!this.fields[0].maxvalue || this.fields[0].maxvalue.length == 0) {
            // gelijk
            criteria = '    <woz:gelijk stuf:entiteittype="WOZ">\n' +
                '        <woz:bevatKadastraleObjecten stuf:entiteittype="WOZKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleIdentificatie>' + this.fields[0].value + '</bg:kadastraleIdentificatie>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:bevatKadastraleObjecten>\n' +
                '    </woz:gelijk>\n';

        } else {
            // vanaf en t/m
            criteria = '    <woz:vanaf stuf:entiteittype="WOZ">\n' +
                '        <woz:bevatKadastraleObjecten stuf:entiteittype="WOZKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleIdentificatie>' + this.fields[0].value + '</bg:kadastraleIdentificatie>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:bevatKadastraleObjecten>\n' +
                '    </woz:vanaf>\n' +
                '    <woz:totEnMet stuf:entiteittype="WOZ">\n' +
                '        <woz:bevatKadastraleObjecten stuf:entiteittype="WOZKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleIdentificatie>' + this.fields[0].maxvalue + '</bg:kadastraleIdentificatie>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:bevatKadastraleObjecten>\n' +
                '    </woz:totEnMet>\n';
        }
        return criteria;
    }

    private makeCriteriaKadastraleAanduiding01() {
        var criteria: string;

        var omvatkadaand = '        <woz:bevatKadastraleObjecten stuf:entiteittype="WOZKOZ">\n' +
            '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
            '                <bg:kadastraleAanduiding>\n';
        var omvataand = '                </bg:kadastraleAanduiding>\n' +
            '            </woz:gerelateerde>\n' +
            '        </woz:omvat>\n';

        var gelijkBegin: string = '    <woz:gelijk stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var gelijkEind: string = omvataand + '    </woz:gelijk>\n';

        var vanafBegin: string = '    <woz:vanaf stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var vanafEind: string = omvataand + '    </woz:vanaf>\n';

        var tmBegin: string = '    <woz:totEnMet stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var tmEind: string = omvataand + '    </woz:totEnMet>\n';

        var gelijk: string = '';
        var vanaf: string = '';
        var tm: string = '';

        // Voor elk veld
        // bepaal of
        // - alleen field.value is ingevuld, dan toevoegen bij gelijk
        // - field.value en field.maxvalue zijn ingevuld, dan toevoegen bij vanaf en t/m
        //
        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i] && this.fields[i].value && this.fields[i].value.length > 0) {
                switch (i) {
                    case 0: //kadgemcode
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].value +
                                '</bg:kadastraleGemeentecode>\n';
                            tm += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].maxvalue +
                                '</bg:kadastraleGemeentecode>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].value +
                                '</bg:kadastraleGemeentecode>\n';
                        }
                        break;
                    case 1: // kadsectie
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                '</bg:kadastraleSectie>\n';
                            tm += '                    <bg:kadastraleSectie>' +
                                this.fields[i].maxvalue +
                                '</bg:kadastraleSectie>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                '</bg:kadastraleSectie>\n';
                        }

                        break;
                    case 2: // kadperceel
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value + '</bg:kadastraalPerceelnummer>\n';
                            tm += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].maxvalue + '</bg:kadastraalPerceelnummer>\n';
                        } else {
                            gelijk += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value +
                                '</bg:kadastraalPerceelnummer>\n';
                        }
                        break;
                    default:
                }
            }
        }

        var c1: string = '';
        var c2: string = '';

        if (gelijk.length > 0) {
            c1 = gelijkBegin + gelijk + gelijkEind;
        }
        if ((vanaf.length > 0) && (tm.length > 0)) {
            c2 = vanafBegin + vanaf + vanafEind + tmBegin + tm + tmEind;
        }
        console.log('c1: ' + c1 + '\nc2: ' + c2 + '\ncriteria: ' + criteria);
        criteria = c1 + c2;
        return criteria;
    }

    // ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'kdp.deelperceelNummer']),
    private makeCriteriaKadastraleAanduiding02() {
        var criteria: string;

        var omvatkadaand = '        <woz:bevatKadastraleObjecten stuf:entiteittype="WOZKOZ">\n' +
            '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
            '                <bg:kadastraleAanduiding>\n';
        var omvataand = '                </bg:kadastraleAanduiding>\n' +
            '            </woz:gerelateerde>\n' +
            '        </woz:omvat>\n';

        var gelijkBegin: string = '    <woz:gelijk stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var gelijkEind: string = omvataand + '    </woz:gelijk>\n';

        var vanafBegin: string = '    <woz:vanaf stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var vanafEind: string = omvataand + '    </woz:vanaf>\n';

        var tmBegin: string = '    <woz:totEnMet stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var tmEind: string = omvataand + '    </woz:totEnMet>\n';

        var gelijk: string = '';
        var vanaf: string = '';
        var tm: string = '';

        // Voor elk veld
        // bepaal of
        // - alleen field.value is ingevuld, dan toevoegen bij gelijk
        // - field.value en field.maxvalue zijn ingevuld, dan toevoegen bij vanaf en t/m
        //
        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i] && this.fields[i].value && this.fields[i].value.length > 0) {
                switch (i) {
                    case 0: //kadgemcode
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].value +
                                '</bg:kadastraleGemeentecode>\n';
                            tm += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].maxvalue +
                                '</bg:kadastraleGemeentecode>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].value +
                                '</bg:kadastraleGemeentecode>\n';
                        }
                        break;
                    case 1: // kadsectie
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                '</bg:kadastraleSectie>\n';
                            tm += '                    <bg:kadastraleSectie>' +
                                this.fields[i].maxvalue +
                                '</bg:kadastraleSectie>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                '</bg:kadastraleSectie>\n';
                        }

                        break;
                    case 2: // kadperceel
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value + '</bg:kadastraalPerceelnummer>\n';
                            tm += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].maxvalue + '</bg:kadastraalPerceelnummer>\n';
                        } else {
                            gelijk += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value +
                                '</bg:kadastraalPerceelnummer>\n';
                        }
                        break;
                    case 3: // kdp.deelperceelNummer
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kdp.deelperceelNummer>' +
                                this.fields[i].value + '</bg:kdp.deelperceelNummer>\n';
                            tm += '                    <bg:kdp.deelperceelNummer>' +
                                this.fields[i].maxvalue + '</bg:kdp.deelperceelNummer>\n';
                        } else {
                            gelijk += '                    <bg:kdp.deelperceelNummer>' +
                                this.fields[i].value +
                                '</bg:kdp.deelperceelNummer>\n';
                        }
                        break;
                    default:
                }
            }
        }

        var c1: string = '';
        var c2: string = '';

        if (gelijk.length > 0) {
            c1 = gelijkBegin + gelijk + gelijkEind;
        }
        if ((vanaf.length > 0) && (tm.length > 0)) {
            c2 = vanafBegin + vanaf + vanafEind + tmBegin + tm + tmEind;
        }
        console.log('c1: ' + c1 + '\nc2: ' + c2 + '\ncriteria: ' + criteria);
        criteria = c1 + c2;
        return criteria;
    }


    /*
       <woz:bevatKadastraleObjecten stuf:entiteittype="WOZKOZ">
           <woz:gerelateerde stuf:entiteittype="KOZ">
               <bg:kadastraleIdentificatie>034000000012345</bg:kadastraleIdentificatie>
               <bg:kadastraleAanduiding>
                   <bg:kadastraleGemeentecode>
                   <bg:kadastraleSectie>
                   <bg:kadastraalPerceelnummer>
                   <bg:apr.appartementsindex>
               </bg:kadastraleAanduiding>
           </woz:gerelateerde>
       </woz:bevatKadastraleObjecten>

    */
    // ['kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'apr.appartementsindex']),
    private makeCriteriaKadastraleAanduiding03() {
        var criteria: string;

        var omvatkadaand = '        <woz:bevatKadastraleObjecten stuf:entiteittype="WOZKOZ">\n' +
            '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
            '                <bg:kadastraleAanduiding>\n';
        var omvataand = '                </bg:kadastraleAanduiding>\n' +
            '            </woz:gerelateerde>\n' +
            '        </woz:omvat>\n';

        var gelijkBegin: string = '    <woz:gelijk stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var gelijkEind: string = omvataand + '    </woz:gelijk>\n';

        var vanafBegin: string = '    <woz:vanaf stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var vanafEind: string = omvataand + '    </woz:vanaf>\n';

        var tmBegin: string = '    <woz:totEnMet stuf:entiteittype="WOZ">\n' + omvatkadaand;
        var tmEind: string = omvataand + '    </woz:totEnMet>\n';

        var gelijk: string = '';
        var vanaf: string = '';
        var tm: string = '';

        // Voor elk veld
        // bepaal of
        // - alleen field.value is ingevuld, dan toevoegen bij gelijk
        // - field.value en field.maxvalue zijn ingevuld, dan toevoegen bij vanaf en t/m
        //
        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i] && this.fields[i].value && this.fields[i].value.length > 0) {
                switch (i) {
                    case 0: //kadgemcode
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].value +
                                '</bg:kadastraleGemeentecode>\n';
                            tm += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].maxvalue +
                                '</bg:kadastraleGemeentecode>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].value +
                                '</bg:kadastraleGemeentecode>\n';
                        }
                        break;
                    case 1: // kadsectie
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                '</bg:kadastraleSectie>\n';
                            tm += '                    <bg:kadastraleSectie>' +
                                this.fields[i].maxvalue +
                                '</bg:kadastraleSectie>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                '</bg:kadastraleSectie>\n';
                        }

                        break;
                    case 2: // kadperceel
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value + '</bg:kadastraalPerceelnummer>\n';
                            tm += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].maxvalue + '</bg:kadastraalPerceelnummer>\n';
                        } else {
                            gelijk += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value +
                                '</bg:kadastraalPerceelnummer>\n';
                        }
                        break;
                    case 3: // apr.appartementsindex
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:apr.appartementsindex>' +
                                this.fields[i].value + '</bg:apr.appartementsindex>\n';
                            tm += '                    <bg:apr.appartementsindex>' +
                                this.fields[i].maxvalue + '</bg:apr.appartementsindex>\n';
                        } else {
                            gelijk += '                    <bg:apr.appartementsindex>' +
                                this.fields[i].value +
                                '</bg:apr.appartementsindex>\n';
                        }
                        break;
                    default:
                }
            }
        }

        var c1: string = '';
        var c2: string = '';

        if (gelijk.length > 0) {
            c1 = gelijkBegin + gelijk + gelijkEind;
        }
        if ((vanaf.length > 0) && (tm.length > 0)) {
            c2 = vanafBegin + vanaf + vanafEind + tmBegin + tm + tmEind;
        }
        console.log('c1: ' + c1 + '\nc2: ' + c2 + '\ncriteria: ' + criteria);
        criteria = c1 + c2;
        return criteria;
    }

    // ['bsVesNummerOfId', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
    private makeCriteriaSubject01() {
        var criteria: string;

        var belangHebbende01 = '        <woz:heeftBelanghebbende stuf:entiteittype="WOZSUB">\n';
        var belangHebbende02 = '        </woz:heeftBelanghebbende>\n';

        var gelijkBegin: string = '    <woz:gelijk stuf:entiteittype="WOZ">\n';
        var gelijkEind: string = '    </woz:gelijk>\n';

        var vanafBegin: string = '    <woz:vanaf stuf:entiteittype="WOZ">\n';
        var vanafEind: string = '    </woz:vanaf>\n';

        var tmBegin: string = '    <woz:totEnMet stuf:entiteittype="WOZ">\n';
        var tmEind: string = '    </woz:totEnMet>\n';

        var gelijk: string = '';
        var vanaf: string = '';
        var tm: string = '';

        var gelijkb: string = '';
        var vanafb: string = '';
        var tmb: string = '';

        var gelijkw: string = '';
        var vanafw: string = '';
        var tmw: string = '';

        // Voor elk veld
        // bepaal of
        // - alleen field.value is ingevuld, dan toevoegen bij gelijk
        // - field.value en field.maxvalue zijn ingevuld, dan toevoegen bij vanaf en t/m
        //
        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i] && this.fields[i].value && this.fields[i].value.length > 0) {
                switch (i) {
                    case 0: // bsVesNummerOfId
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanafb += '            <woz:gerelateerde stuf:entiteittype="SUB">\n' +
                                '                <woz:bsVesNummerOfId>' +
                                this.fields[i].value +
                                '</woz:bsVesNummerOfId>\n' +
                                '            </woz:gerelateerde>\n';
                            tmb += '            <woz:gerelateerde stuf:entiteittype="SUB">\n' +
                                '                <woz:bsVesNummerOfId>' +
                                this.fields[i].maxvalue +
                                '</woz:bsVesNummerOfId>\n' +
                                '            </woz:gerelateerde>\n';
                        } else {
                            gelijkb += '            <woz:gerelateerde stuf:entiteittype="SUB">\n' +
                                '                <woz:bsVesNummerOfId>' +
                                this.fields[i].value +
                                '</woz:bsVesNummerOfId>\n' +
                                '            </woz:gerelateerde>\n';
                        }
                        break;
                    case 1: // aanduidingEigenaarGebruiker
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanafb += '            <woz:aanduidingEigenaarGebruiker>' +
                                this.fields[i].value +
                                '</woz:aanduidingEigenaarGebruiker>\n';
                            tmb += '            <woz:aanduidingEigenaarGebruiker>' +
                                this.fields[i].maxvalue +
                                '</woz:aanduidingEigenaarGebruiker>\n';
                        } else {
                            gelijkb += '            <woz:aanduidingEigenaarGebruiker>' +
                                this.fields[i].value +
                                '</woz:aanduidingEigenaarGebruiker>\n';
                        }
                        break;
                    case 2: // wozObjectnummer
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanafw += '        <woz:wozObjectNummer>' +
                                this.fields[i].value +
                                '</woz:wozObjectNummer>\n';
                            tmw += '        <woz:wozObjectNummer>' +
                                this.fields[i].maxvalue +
                                '</woz:wozObjectNummer>\n';
                        } else {
                            gelijkw += '        <woz:wozObjectNummer>' +
                                this.fields[i].value +
                                '</woz:wozObjectNummer>\n';
                        }
                        break;
                    default:
                }
            }
        }
        var c1: string = '';
        var c2: string = '';

        var cb0: string = '';
        var cb1: string = '';
        var cb2: string = '';

        // belanghebbende criteria benoemd voor gelijk
        if (gelijkb.length > 0) {
            cb0 = belangHebbende01 + gelijkb + belangHebbende02;
        }

        // belanghebbende criteria benoemd voor vanaf en t/m
        if ((vanafb.length > 0) && (tmb.length > 0)) {
            cb1 = belangHebbende01 + vanafb + belangHebbende02;
            cb2 = belangHebbende01 + tmb + belangHebbende02;
        }

        if ((cb0.length > 0) || (gelijkw.length > 0)) {
            c1 = gelijkBegin + gelijkw + cb0 + gelijkEind;
        }
        if (((cb1.length > 0 ) && (cb2.length > 0)) || ((vanafw.length > 0) && ((tmw.length > 0)))) {
            c2 = vanafBegin + vanafw + cb1 + vanafEind + tmBegin + tmw + cb2 + tmEind;
        }
        console.log('c1: ' + c1 + '\nc2: ' + c2 + '\ncriteria: ' + criteria);
        criteria = c1 + c2;
        return criteria;
    }
    /*
           <woz:wozObjectNummer>122334455667</woz:wozObjectNummer>
           <woz:heeftBelanghebbende stuf:entiteittype="WOZSUB">
               <woz:gerelateerde stuf:entiteittype="SUB">
                   <woz:naam>
                   <woz:bsVesNummerOfId>
                   <woz:adresNederland>
                       <bg:postcode>9999AA</bg:postcode>
                       <bg:aoa.huisnummer>1</bg:aoa.huisnummer>
                       <bg:aoa.huisletter>a</bg:aoa.huisletter>
                       <bg:aoa.huisnummertoevoeging>
                   </woz:adresNederland>
               </woz:gerelateerde>
               <woz:aanduidingEigenaarGebruiker>B</woz:aanduidingEigenaarGebruiker>
           </woz:heeftBelanghebbende>
        */

    // ['naam', 'aanduidingEigenaarGebruiker', 'wozObjectnummer']),
    private makeCriteriaSubject02() {
        var criteria: string;

        var belangHebbende01 = '        <woz:heeftBelanghebbende stuf:entiteittype="WOZSUB">\n';
        var belangHebbende02 = '        </woz:heeftBelanghebbende>\n';

        var gelijkBegin: string = '    <woz:gelijk stuf:entiteittype="WOZ">\n';
        var gelijkEind: string = '    </woz:gelijk>\n';

        var vanafBegin: string = '    <woz:vanaf stuf:entiteittype="WOZ">\n';
        var vanafEind: string = '    </woz:vanaf>\n';

        var tmBegin: string = '    <woz:totEnMet stuf:entiteittype="WOZ">\n';
        var tmEind: string = '    </woz:totEnMet>\n';

        var gelijk: string = '';
        var vanaf: string = '';
        var tm: string = '';

        var gelijkb: string = '';
        var vanafb: string = '';
        var tmb: string = '';

        var gelijkw: string = '';
        var vanafw: string = '';
        var tmw: string = '';

        // Voor elk veld
        // bepaal of
        // - alleen field.value is ingevuld, dan toevoegen bij gelijk
        // - field.value en field.maxvalue zijn ingevuld, dan toevoegen bij vanaf en t/m
        //
        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i] && this.fields[i].value && this.fields[i].value.length > 0) {
                switch (i) {
                    case 0: // naam
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanafb += '            <woz:gerelateerde stuf:entiteittype="SUB">\n' +
                                '                <woz:naam>' +
                                this.fields[i].value +
                                '</woz:naam>\n' +
                                '            </woz:gerelateerde>\n';
                            tmb += '            <woz:gerelateerde stuf:entiteittype="SUB">\n' +
                                '                <woz:naam>' +
                                this.fields[i].maxvalue +
                                '</woz:naam>\n' +
                                '            </woz:gerelateerde>\n';
                        } else {
                            gelijkb += '            <woz:gerelateerde stuf:entiteittype="SUB">\n' +
                                '                <woz:naam>' +
                                this.fields[i].value +
                                '</woz:naam>\n' +
                                '            </woz:gerelateerde>\n';
                        }
                        break;
                    case 1: // aanduidingEigenaarGebruiker
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanafb += '            <woz:aanduidingEigenaarGebruiker>' +
                                this.fields[i].value +
                                '</woz:aanduidingEigenaarGebruiker>\n';
                            tmb += '            <woz:aanduidingEigenaarGebruiker>' +
                                this.fields[i].maxvalue +
                                '</woz:aanduidingEigenaarGebruiker>\n';
                        } else {
                            gelijkb += '            <woz:aanduidingEigenaarGebruiker>' +
                                this.fields[i].value +
                                '</woz:aanduidingEigenaarGebruiker>\n';
                        }
                        break;
                    case 2: // wozObjectnummer
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanafw += '        <woz:wozObjectNummer>' +
                                this.fields[i].value +
                                '</woz:wozObjectNummer>\n';
                            tmw += '        <woz:wozObjectNummer>' +
                                this.fields[i].maxvalue +
                                '</woz:wozObjectNummer>\n';
                        } else {
                            gelijkw += '        <woz:wozObjectNummer>' +
                                this.fields[i].value +
                                '</woz:wozObjectNummer>\n';
                        }
                        break;
                    default:
                }
            }
        }
        var c1: string = '';
        var c2: string = '';

        var cb0: string = '';
        var cb1: string = '';
        var cb2: string = '';

        // belanghebbende criteria benoemd voor gelijk
        if (gelijkb.length > 0) {
            cb0 = belangHebbende01 + gelijkb + belangHebbende02;
        }

        // belanghebbende criteria benoemd voor vanaf en t/m
        if ((vanafb.length > 0) && (tmb.length > 0)) {
            cb1 = belangHebbende01 + vanafb + belangHebbende02;
            cb2 = belangHebbende01 + tmb + belangHebbende02;
        }

        if ((cb0.length > 0) || (gelijkw.length > 0)) {
            c1 = gelijkBegin + gelijkw + cb0 + gelijkEind;
        }
        if (((cb1.length > 0 ) && (cb2.length > 0)) || ((vanafw.length > 0) && ((tmw.length > 0)))) {
            c2 = vanafBegin + vanafw + cb1 + vanafEind + tmBegin + tmw + cb2 + tmEind;
        }
        console.log('c1: ' + c1 + '\nc2: ' + c2 + '\ncriteria: ' + criteria);
        criteria = c1 + c2;
        return criteria;
    }

}
