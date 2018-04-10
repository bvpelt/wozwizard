import {Checkbox} from './checkbox';

export class WOZBuilder {
  private ontleentAanduidingAan: boolean = false;
  private isVerbondenMet: boolean = false;
  private bevatKadastraleObjecten: boolean = false;
  private heeftAlsAanduiding: boolean = false;
  private heeftPand: boolean = false;
  private heeftSluimerendObject: boolean = false;
  private heeftBelanghebbende: boolean = false;
  private ligtIn: boolean = false;

  public xmlString: string = this.makeText();

  constructor(cb: Checkbox []) {

    this.ontleentAanduidingAan = false;
    this.isVerbondenMet = false;
    this.bevatKadastraleObjecten = false;
    this.heeftAlsAanduiding = false;
    this.heeftPand = false;
    this.heeftSluimerendObject = false;
    this.heeftBelanghebbende = false;
    this.ligtIn = false;

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
    this.xmlString = this.xmlString01 +
      this.getOntleentAanduidingAan() +
      this.getIsVerbondenMet() +
      this.getBevatKadastraleObjecten() +
      this.getHeeftAlsAanduiding() +
      this.getHeeftPand() +
      this.getHeeftSluimerendObject() +
      this.getHeeftBelanghebbende() +
      this.getLigtIn() +
      this.xmlString02;
    return this.xmlString;
  }

  private xmlString02: string = '    </woz:object>\n' +
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
    '  </woz:parameters>\n' +
    '  <woz:scope>\n' +
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
}
