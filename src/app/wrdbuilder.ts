import {Checkbox} from './checkbox';

export class WRDBuilder {
  private isVoor: boolean = false;
  private wordtVerdeeldNaar: boolean = false;
  private isBeschiktVoor: boolean = false;

  public xmlString: string = this.makeText();

  constructor(cb: Checkbox []) {
    this.isVoor = false;
    this.wordtVerdeeldNaar = false;
    this.isBeschiktVoor = false;

    for (var i = 0; cb && i < cb.length; i++) {
      switch (cb[i].name) {
        case 'isVoor' :
          this.isVoor = true;
          break;
        case 'wordtVerdeeldNaar' :
          this.wordtVerdeeldNaar = true;
          break;
        case 'isBeschiktVoor' :
          this.isBeschiktVoor = true;
          break;
        default:
      }
    }
    this.xmlString = this.makeText();
  }

  public makeText() {
    //console.log('wozbuilder - ontleentAanduidingAan: ' + this.ontleentAanduidingAan);
    this.xmlString = this.xmlString01 +
      this.getIsVoor() +
      this.getWordtVerdeeldNaar() +
      this.getIsBeschiktVoor() +
      this.xmlString02;
    return this.xmlString;
  }

  private xmlString01: string = '<?xml version="1.0" encoding="UTF-8"?>\n' +

    '<lv:wrdLv01-lvwoz xmlns:stuf="http://www.egem.nl/StUF/StUF0301" xmlns:bg="http://www.egem.nl/StUF/sector/bg/0310"\n' +
    '                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
    '                  xmlns:woz="http://www.stufstandaarden.nl/sectormodel/woz0313"\n' +
    '                  xmlns:lv="http://www.stufstandaarden.nl/koppelvlak/woz0313/lv0100"\n' +
    '                  xsi:schemaLocation="http://www.stufstandaarden.nl/koppelvlak/woz0313/lv0100 woz0313_20160701/woz0313_lv0100/vraagAntwoord/lv0100_msg_vraagAntwoord.xsd">\n' +
    '    <woz:stuurgegevens>\n' +
    '        <stuf:berichtcode>Lv01</stuf:berichtcode>\n' +
    '        <stuf:zender>\n' +
    '            <stuf:organisatie>o</stuf:organisatie>\n' +
    '            <stuf:applicatie>app</stuf:applicatie>\n' +
    '            <stuf:administratie>a</stuf:administratie>\n' +
    '            <stuf:gebruiker>g</stuf:gebruiker>\n' +
    '        </stuf:zender>\n' +
    '        <stuf:ontvanger>\n' +
    '            <stuf:organisatie>o</stuf:organisatie>\n' +
    '            <stuf:applicatie>app</stuf:applicatie>\n' +
    '            <stuf:administratie>a</stuf:administratie>\n' +
    '            <stuf:gebruiker>g</stuf:gebruiker>\n' +
    '        </stuf:ontvanger>\n' +
    '        <stuf:referentienummer>ref</stuf:referentienummer>\n' +
    '        <stuf:tijdstipBericht>20180301153000000</stuf:tijdstipBericht>\n' +
    '        <stuf:entiteittype>WRD</stuf:entiteittype>\n' +
    '    </woz:stuurgegevens>\n' +
    '    <woz:parameters>\n' +
    '        <stuf:sortering>0</stuf:sortering>\n' +
    '        <stuf:indicatorVervolgvraag>false</stuf:indicatorVervolgvraag>\n' +
    '        <stuf:maximumAantal>15</stuf:maximumAantal>\n' +
    '        <stuf:indicatorAfnemerIndicatie>false</stuf:indicatorAfnemerIndicatie>\n' +
    '        <stuf:indicatorAantal>false</stuf:indicatorAantal>\n' +
    '    </woz:parameters>\n' +
    '    <woz:gelijk stuf:entiteittype="WRD">\n' +
    '        <woz:waardepeildatum>20180101</woz:waardepeildatum>\n' +
    '        <woz:toestandspeildatum>20180101</woz:toestandspeildatum>\n' +
    '        <woz:isVoor stuf:entiteittype="WRDWOZ">\n' +
    '            <woz:gerelateerde stuf:entiteittype="WOZ">\n' +
    '                <woz:wozObjectNummer>123456789012</woz:wozObjectNummer>\n' +
    '                <woz:aanduidingWOZobject>\n' +
    '                    <bg:wpl.woonplaatsNaam/>\n' +
    '                    <bg:aoa.postcode>9999AA</bg:aoa.postcode>\n' +
    '                    <bg:gor.openbareRuimteNaam/>\n' +
    '                    <bg:aoa.huisnummer>2</bg:aoa.huisnummer>\n' +
    '                    <bg:aoa.huisletter>a</bg:aoa.huisletter>\n' +
    '                    <bg:aoa.huisnummertoevoeging/>\n' +
    '                    <bg:locatieOmschrijving/>\n' +
    '                </woz:aanduidingWOZobject>\n' +
    '                <woz:verantwoordelijkeGemeente>\n' +
    '                    <bg:gemeenteCode>0340</bg:gemeenteCode>\n' +
    '                </woz:verantwoordelijkeGemeente>\n' +
    '            </woz:gerelateerde>\n' +
    '        </woz:isVoor>\n' +
    '    </woz:gelijk>\n' +
    '    <woz:vanaf stuf:entiteittype="WRD">\n' +
    '        <woz:waardepeildatum>20180101</woz:waardepeildatum>\n' +
    '        <woz:toestandspeildatum>20180101</woz:toestandspeildatum>\n' +
    '        <woz:isVoor stuf:entiteittype="WRDWOZ">\n' +
    '            <woz:gerelateerde stuf:entiteittype="WOZ">\n' +
    '                <woz:wozObjectNummer>123456789012</woz:wozObjectNummer>\n' +
    '                <woz:aanduidingWOZobject>\n' +
    '                    <bg:wpl.woonplaatsNaam/>\n' +
    '                    <bg:aoa.postcode>9999AA</bg:aoa.postcode>\n' +
    '                    <bg:gor.openbareRuimteNaam/>\n' +
    '                    <bg:aoa.huisnummer>2</bg:aoa.huisnummer>\n' +
    '                    <bg:aoa.huisletter>a</bg:aoa.huisletter>\n' +
    '                    <bg:aoa.huisnummertoevoeging/>\n' +
    '                    <bg:locatieOmschrijving/>\n' +
    '                </woz:aanduidingWOZobject>\n' +
    '                <woz:verantwoordelijkeGemeente>\n' +
    '                    <bg:gemeenteCode>0340</bg:gemeenteCode>\n' +
    '                </woz:verantwoordelijkeGemeente>\n' +
    '            </woz:gerelateerde>\n' +
    '        </woz:isVoor>\n' +
    '    </woz:vanaf>\n' +
    '    <woz:totEnMet stuf:entiteittype="WRD">\n' +
    '        <woz:waardepeildatum>20180101</woz:waardepeildatum>\n' +
    '        <woz:toestandspeildatum>20180101</woz:toestandspeildatum>\n' +
    '        <woz:isVoor stuf:entiteittype="WRDWOZ">\n' +
    '            <woz:gerelateerde stuf:entiteittype="WOZ">\n' +
    '                <woz:wozObjectNummer>123456789012</woz:wozObjectNummer>\n' +
    '                <woz:aanduidingWOZobject>\n' +
    '                    <bg:wpl.woonplaatsNaam/>\n' +
    '                    <bg:aoa.postcode>9999AA</bg:aoa.postcode>\n' +
    '                    <bg:gor.openbareRuimteNaam/>\n' +
    '                    <bg:aoa.huisnummer>2</bg:aoa.huisnummer>\n' +
    '                    <bg:aoa.huisletter>a</bg:aoa.huisletter>\n' +
    '                    <bg:aoa.huisnummertoevoeging/>\n' +
    '                    <bg:locatieOmschrijving/>\n' +
    '                </woz:aanduidingWOZobject>\n' +
    '                <woz:verantwoordelijkeGemeente>\n' +
    '                    <bg:gemeenteCode>0340</bg:gemeenteCode>\n' +
    '                </woz:verantwoordelijkeGemeente>\n' +
    '            </woz:gerelateerde>\n' +
    '        </woz:isVoor>\n' +
    '    </woz:totEnMet>\n' +
    '    <woz:scope>\n' +
    '        <woz:object stuf:entiteittype="WRD">\n' +
    '            <woz:waardepeildatum xsi:nil="true"/>\n' +
    '            <woz:toestandspeildatum xsi:nil="true"/>\n' +
    '            <woz:vastgesteldeWaarde xsi:nil="true"/>\n' +
    '            <woz:ingangsdatumWaarde xsi:nil="true"/>\n' +
    '            <woz:heffingsmaatstafOZB xsi:nil="true"/>\n' +
    '            <woz:heffingsmaatstafOZBGebruiker xsi:nil="true"/>\n' +
    '            <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
    '            <stuf:tijdvakGeldigheid>\n' +
    '                <stuf:beginGeldigheid xsi:nil="true"/>\n' +
    '                <stuf:eindGeldigheid xsi:nil="true"/>\n' +
    '            </stuf:tijdvakGeldigheid>\n' +
    '            <stuf:tijdstipRegistratie xsi:nil="true"/>\n';

  private xmlString02: string = '        </woz:object>\n' +
    '    </woz:scope>\n' +
    '</lv:wrdLv01-lvwoz>\n';

  private getIsVoor() {
    var t: string;
    if (this.isVoor) {
      t = '            <woz:isVoor stuf:entiteittype="WRDWOZ">\n' +
        '                <woz:gerelateerde stuf:entiteittype="WOZ">\n' +
        '                    <woz:wozObjectNummer xsi:nil="true"/>\n' +
        '                    <woz:aanduidingWOZobject>\n' +
        '                        <bg:wpl.woonplaatsNaam/>\n' +
        '                        <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                        <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                        <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                        <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                        <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                        <bg:locatieOmschrijving xsi:nil="true"/>\n' +
        '                    </woz:aanduidingWOZobject>\n' +
        '                    <woz:statusWozObject xsi:nil="true"/>\n' +
        '                    <woz:grondoppervlakte xsi:nil="true"/>\n' +
        '                    <woz:gebruikscode xsi:nil="true"/>\n' +
        '                    <woz:codeGebouwdOngebouwd xsi:nil="true"/>\n' +
        '                    <woz:meegetaxeerdeOppervlakteGebouwd xsi:nil="true"/>\n' +
        '                    <woz:ozbVrijstelling xsi:nil="true"/>\n' +
        '                    <woz:verantwoordelijkeGemeente>\n' +
        '                        <bg:gemeenteCode xsi:nil="true"/>\n' +
        '                        <bg:gemeenteNaam xsi:nil="true"/>\n' +
        '                    </woz:verantwoordelijkeGemeente>\n' +
        '                    <woz:wozObjectGeometrie xsi:nil="true"/>\n' +
        '                    <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                    <woz:ingangsdatumObject xsi:nil="true"/>\n' +
        '                    <woz:einddatumObject xsi:nil="true"/>\n' +
        '                    <stuf:tijdvakGeldigheid>\n' +
        '                        <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                        <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                    </stuf:tijdvakGeldigheid>\n' +
        '                    <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                    <woz:ontleentAanduidingAan stuf:entiteittype="WOZAOTAND">\n' +
        '                        <woz:gerelateerde>\n' +
        '                            <bg:ligplaats stuf:entiteittype="LIG">\n' +
        '                                <bg:identificatie xsi:nil="true"/>\n' +
        '                                <bg:adresAanduidingGrp>\n' +
        '                                    <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                </bg:adresAanduidingGrp>\n' +
        '                            </bg:ligplaats>\n' +
        '                            <bg:standplaats stuf:entiteittype="STA">\n' +
        '                                <bg:identificatie xsi:nil="true"/>\n' +
        '                                <bg:adresAanduidingGrp>\n' +
        '                                    <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                </bg:adresAanduidingGrp>\n' +
        '                            </bg:standplaats>\n' +
        '                            <bg:verblijfsobject stuf:entiteittype="VBO">\n' +
        '                                <bg:identificatie xsi:nil="true"/>\n' +
        '                                <bg:adresAanduidingGrp>\n' +
        '                                    <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                </bg:adresAanduidingGrp>\n' +
        '                            </bg:verblijfsobject>\n' +
        '                        </woz:gerelateerde>\n' +
        '                        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                        <stuf:tijdvakRelatie>\n' +
        '                            <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                            <stuf:eindRelatie xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakRelatie>\n' +
        '                        <stuf:tijdvakGeldigheid>\n' +
        '                            <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                            <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakGeldigheid>\n' +
        '                        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                    </woz:ontleentAanduidingAan>\n' +
        '                    <woz:isVerbondenMet stuf:entiteittype="WOZAOTOND">\n' +
        '                        <woz:gerelateerde>\n' +
        '                            <bg:ligplaats stuf:entiteittype="LIG">\n' +
        '                                <bg:identificatie xsi:nil="true"/>\n' +
        '                                <bg:adresAanduidingGrp>\n' +
        '                                    <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                </bg:adresAanduidingGrp>\n' +
        '                            </bg:ligplaats>\n' +
        '                            <bg:standplaats stuf:entiteittype="STA">\n' +
        '                                <bg:identificatie xsi:nil="true"/>\n' +
        '                                <bg:adresAanduidingGrp>\n' +
        '                                    <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                </bg:adresAanduidingGrp>\n' +
        '                            </bg:standplaats>\n' +
        '                            <bg:verblijfsobject stuf:entiteittype="VBO">\n' +
        '                                <bg:identificatie xsi:nil="true"/>\n' +
        '                                <bg:adresAanduidingGrp>\n' +
        '                                    <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                </bg:adresAanduidingGrp>\n' +
        '                            </bg:verblijfsobject>\n' +
        '                        </woz:gerelateerde>\n' +
        '                        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                        <stuf:tijdvakRelatie>\n' +
        '                            <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                            <stuf:eindRelatie xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakRelatie>\n' +
        '                        <stuf:tijdvakGeldigheid>\n' +
        '                            <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                            <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakGeldigheid>\n' +
        '                        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                    </woz:isVerbondenMet>\n' +
        '                    <woz:bevatKadastraleObjecten stuf:entiteittype="WOZKOZ">\n' +
        '                        <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
        '                            <bg:kadastraleIdentificatie xsi:nil="true"/>\n' +
        '                            <bg:kadastraleAanduiding>\n' +
        '                                <bg:kadastraleGemeentecode xsi:nil="true"/>\n' +
        '                                <bg:kadastraleSectie xsi:nil="true"/>\n' +
        '                                <bg:kadastraalPerceelnummer xsi:nil="true"/>\n' +
        '                                <bg:kdp.deelperceelNummer xsi:nil="true"/>\n' +
        '                                <bg:apr.appartementsIndex xsi:nil="true"/>\n' +
        '                            </bg:kadastraleAanduiding>\n' +
        '                            <bg:ingangsdatumObject xsi:nil="true"/>\n' +
        '                            <bg:einddatumObject xsi:nil="true"/>\n' +
        '                        </woz:gerelateerde>\n' +
        '                        <woz:toegekendeOppervlakte xsi:nil="true"/>\n' +
        '                        <woz:meegetaxeerdeOppervlakte xsi:nil="true"/>\n' +
        '                        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                        <stuf:tijdvakRelatie>\n' +
        '                            <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                            <stuf:eindRelatie xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakRelatie>\n' +
        '                        <stuf:tijdvakGeldigheid>\n' +
        '                            <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                            <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakGeldigheid>\n' +
        '                        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                    </woz:bevatKadastraleObjecten>\n' +
        '                    <woz:heeftPand stuf:entiteittype="WOZPND">\n' +
        '                        <woz:gerelateerde stuf:entiteittype="PND">\n' +
        '                            <bg:identificatie xsi:nil="true"/>\n' +
        '                            <bg:ingangsdatumObject xsi:nil="true"/>\n' +
        '                            <bg:einddatumObject xsi:nil="true"/>\n' +
        '                        </woz:gerelateerde>\n' +
        '                        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                        <stuf:tijdvakRelatie>\n' +
        '                            <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                            <stuf:eindRelatie xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakRelatie>\n' +
        '                        <stuf:tijdvakGeldigheid>\n' +
        '                            <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                            <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakGeldigheid>\n' +
        '                        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                    </woz:heeftPand>\n' +
        '                    <woz:heeftSluimerendObject stuf:entiteittype="WOZSWO">\n' +
        '                        <woz:gerelateerde stuf:entiteittype="SWO">\n' +
        '                            <woz:wozObjectNummer xsi:nil="true"/>\n' +
        '                            <woz:statusWozObject xsi:nil="true"/>\n' +
        '                            <woz:grondoppervlakte xsi:nil="true"/>\n' +
        '                            <woz:codeGebouwdOngebouwd xsi:nil="true"/>\n' +
        '                            <woz:meegetaxeerdeOppervlakteGebouwd xsi:nil="true"/>\n' +
        '                            <woz:verantwoordelijkeGemeente>\n' +
        '                                <bg:gemeenteCode xsi:nil="true"/>\n' +
        '                                <bg:gemeenteNaam xsi:nil="true"/>\n' +
        '                            </woz:verantwoordelijkeGemeente>\n' +
        '                            <woz:wozObjectGeometrie xsi:nil="true"/>\n' +
        '                            <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                            <woz:ingangsdatumObject xsi:nil="true"/>\n' +
        '                            <woz:einddatumObject xsi:nil="true"/>\n' +
        '                            <stuf:tijdvakGeldigheid>\n' +
        '                                <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                                <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                            </stuf:tijdvakGeldigheid>\n' +
        '                            <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                            <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
        '                                <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
        '                                    <bg:kadastraleIdentificatie xsi:nil="true"/>\n' +
        '                                    <bg:kadastraleAanduiding>\n' +
        '                                        <bg:kadastraleGemeentecode xsi:nil="true"/>\n' +
        '                                        <bg:kadastraleSectie xsi:nil="true"/>\n' +
        '                                        <bg:kadastraalPerceelnummer xsi:nil="true"/>\n' +
        '                                        <bg:kdp.deelperceelNummer xsi:nil="true"/>\n' +
        '                                        <bg:apr.appartementsIndex xsi:nil="true"/>\n' +
        '                                    </bg:kadastraleAanduiding>\n' +
        '                                    <bg:ingangsdatumObject xsi:nil="true"/>\n' +
        '                                    <bg:einddatumObject xsi:nil="true"/>\n' +
        '                                </woz:gerelateerde>\n' +
        '                            </woz:omvat>\n' +
        '                            <woz:ligtIn stuf:entiteittype="SWOWSP">\n' +
        '                                <woz:gerelateerde stuf:entiteittype="WSP">\n' +
        '                                    <woz:betrokkenWaterschap xsi:nil="true"/>\n' +
        '                                    <woz:waterschapNaam xsi:nil="true"/>\n' +
        '                                    <woz:ingangsdatumObject xsi:nil="true"/>\n' +
        '                                    <woz:einddatumObject xsi:nil="true"/>\n' +
        '                                </woz:gerelateerde>\n' +
        '                                <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                                <stuf:tijdvakRelatie>\n' +
        '                                    <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                                </stuf:tijdvakRelatie>\n' +
        '                                <stuf:tijdvakGeldigheid>\n' +
        '                                    <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                                    <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                                </stuf:tijdvakGeldigheid>\n' +
        '                                <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                            </woz:ligtIn>\n' +
        '                        </woz:gerelateerde>\n' +
        '                        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                        <stuf:tijdvakRelatie>\n' +
        '                            <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                            <stuf:eindRelatie xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakRelatie>\n' +
        '                        <stuf:tijdvakGeldigheid>\n' +
        '                            <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                            <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakGeldigheid>\n' +
        '                        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                    </woz:heeftSluimerendObject>\n' +
        '                    <woz:heeftBelanghebbende stuf:entiteittype="WOZSUB">\n' +
        '                        <woz:gerelateerde>\n' +
        '                            <woz:natuurlijkPersoon stuf:entiteittype="NPS">\n' +
        '                                <woz:isEen stuf:entiteittype="NPSNPS">\n' +
        '                                    <woz:gerelateerde stuf:entiteittype="NPS">\n' +
        '                                        <bg:inp.bsn xsi:nil="true"/>\n' +
        '                                        <bg:anp.identificatie xsi:nil="true"/>\n' +
        '                                        <bg:geslachtsnaam xsi:nil="true"/>\n' +
        '                                        <bg:voorletters xsi:nil="true"/>\n' +
        '                                        <bg:aanduidingNaamgebruik xsi:nil="true"/>\n' +
        '                                        <bg:geslachtsnaamPartner xsi:nil="true"/>\n' +
        '                                        <bg:voorvoegselGeslachtsnaamPartner xsi:nil="true"/>\n' +
        '                                        <bg:aanhefAanschrijving xsi:nil="true"/>\n' +
        '                                        <bg:geslachtsnaamAanschrijving xsi:nil="true"/>\n' +
        '                                        <bg:geslachtsaanduiding xsi:nil="true"/>\n' +
        '                                        <bg:geboortedatum xsi:nil="true"/>\n' +
        '                                        <bg:overlijdensdatum xsi:nil="true"/>\n' +
        '                                        <bg:inp.verblijftIn stuf:entiteittype="NPSTGO">\n' +
        '                                            <bg:gerelateerde stuf:entiteittype="TGO">\n' +
        '                                                <bg:identificatie xsi:nil="true"/>\n' +
        '                                                <bg:adresAanduidingGrp>\n' +
        '                                                    <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                                </bg:adresAanduidingGrp>\n' +
        '                                            </bg:gerelateerde>\n' +
        '                                        </bg:inp.verblijftIn>\n' +
        '                                        <bg:verblijfsadres>\n' +
        '                                            <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                            <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                            <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                            <bg:inp.locatiebeschrijving xsi:nil="true"/>\n' +
        '                                        </bg:verblijfsadres>\n' +
        '                                        <bg:sub.verblijfBuitenland>\n' +
        '                                            <bg:lnd.landcode xsi:nil="true"/>\n' +
        '                                            <bg:lnd.landnaam xsi:nil="true"/>\n' +
        '                                            <bg:sub.adresBuitenland1 xsi:nil="true"/>\n' +
        '                                            <bg:sub.adresBuitenland2 xsi:nil="true"/>\n' +
        '                                            <bg:sub.adresBuitenland3 xsi:nil="true"/>\n' +
        '                                        </bg:sub.verblijfBuitenland>\n' +
        '                                        <bg:sub.correspondentieAdres>\n' +
        '                                            <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                            <bg:postcode xsi:nil="true"/>\n' +
        '                                            <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                            <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                            <bg:sub.postadresType xsi:nil="true"/>\n' +
        '                                            <bg:sub.postadresNummer xsi:nil="true"/>\n' +
        '                                        </bg:sub.correspondentieAdres>\n' +
        '                                        <bg:inp.indicatieGeheim xsi:nil="true"/>\n' +
        '                                    </woz:gerelateerde>\n' +
        '                                </woz:isEen>\n' +
        '                                <woz:soFiNummer xsi:nil="true"/>\n' +
        '                                <woz:aanvullingSoFiNummer xsi:nil="true"/>\n' +
        '                                <woz:verantwoordelijkeGemeente xsi:nil="true"/>\n' +
        '                                <woz:datumEindeSynchronisatie xsi:nil="true"/>\n' +
        '                            </woz:natuurlijkPersoon>\n' +
        '                            <woz:nietNatuurlijkPersoon stuf:entiteittype="NNP">\n' +
        '                                <woz:isEen stuf:entiteittype="NNPNNP">\n' +
        '                                    <woz:gerelateerde stuf:entiteittype="NNP">\n' +
        '                                        <bg:inn.nnpId xsi:nil="true"/>\n' +
        '                                        <bg:ann.identificatie xsi:nil="true"/>\n' +
        '                                        <bg:statutaireNaam xsi:nil="true"/>\n' +
        '                                        <bg:sub.correspondentieAdres>\n' +
        '                                            <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                            <bg:postcode xsi:nil="true"/>\n' +
        '                                            <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                            <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                            <bg:sub.postadresType xsi:nil="true"/>\n' +
        '                                            <bg:sub.postadresNummer xsi:nil="true"/>\n' +
        '                                        </bg:sub.correspondentieAdres>\n' +
        '                                        <bg:sub.verblijfBuitenland>\n' +
        '                                            <bg:lnd.landcode xsi:nil="true"/>\n' +
        '                                            <bg:lnd.landnaam xsi:nil="true"/>\n' +
        '                                            <bg:sub.adresBuitenland1 xsi:nil="true"/>\n' +
        '                                            <bg:sub.adresBuitenland2 xsi:nil="true"/>\n' +
        '                                            <bg:sub.adresBuitenland3 xsi:nil="true"/>\n' +
        '                                        </bg:sub.verblijfBuitenland>\n' +
        '                                        <bg:rps.isEigenaarVan stuf:entiteittype="NNPMAC">\n' +
        '                                            <bg:gerelateerde stuf:entiteittype="MAC">\n' +
        '                                                <bg:kvkNummer xsi:nil="true"/>\n' +
        '                                            </bg:gerelateerde>\n' +
        '                                        </bg:rps.isEigenaarVan>\n' +
        '                                    </woz:gerelateerde>\n' +
        '                                </woz:isEen>\n' +
        '                                <woz:aanvullingSoFiNummer xsi:nil="true"/>\n' +
        '                                <woz:verantwoordelijkeGemeente xsi:nil="true"/>\n' +
        '                                <woz:datumEindeSynchronisatie xsi:nil="true"/>\n' +
        '                            </woz:nietNatuurlijkPersoon>\n' +
        '                            <woz:vestiging stuf:entiteittype="VES">\n' +
        '                                <woz:isEen stuf:entiteittype="VESVES">\n' +
        '                                    <woz:gerelateerde stuf:entiteittype="VES">\n' +
        '                                        <bg:vestigingsNummer xsi:nil="true"/>\n' +
        '                                        <bg:handelsnaam xsi:nil="true"/>\n' +
        '                                        <bg:verblijfsadres>\n' +
        '                                            <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                            <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                            <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                            <bg:inp.locatiebeschrijving xsi:nil="true"/>\n' +
        '                                        </bg:verblijfsadres>\n' +
        '                                        <bg:sub.verblijfBuitenland>\n' +
        '                                            <bg:lnd.landcode xsi:nil="true"/>\n' +
        '                                            <bg:lnd.landnaam xsi:nil="true"/>\n' +
        '                                            <bg:sub.adresBuitenland1 xsi:nil="true"/>\n' +
        '                                            <bg:sub.adresBuitenland2 xsi:nil="true"/>\n' +
        '                                            <bg:sub.adresBuitenland3 xsi:nil="true"/>\n' +
        '                                        </bg:sub.verblijfBuitenland>\n' +
        '                                        <bg:sub.correspondentieAdres>\n' +
        '                                            <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                            <bg:postcode xsi:nil="true"/>\n' +
        '                                            <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                            <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                            <bg:sub.postadresType xsi:nil="true"/>\n' +
        '                                            <bg:sub.postadresNummer xsi:nil="true"/>\n' +
        '                                        </bg:sub.correspondentieAdres>\n' +
        '                                        <bg:oefentActiviteitenUitVoor stuf:entiteittype="VESMAC">\n' +
        '                                            <bg:gerelateerde stuf:entiteittype="MAC">\n' +
        '                                                <bg:kvkNummer xsi:nil="true"/>\n' +
        '                                            </bg:gerelateerde>\n' +
        '                                        </bg:oefentActiviteitenUitVoor>\n' +
        '                                        <bg:heeftAlsHoofdLocatie stuf:entiteittype="VESTGOHFD">\n' +
        '                                            <bg:gerelateerde stuf:entiteittype="TGO">\n' +
        '                                                <bg:identificatie xsi:nil="true"/>\n' +
        '                                                <bg:adresAanduidingGrp>\n' +
        '                                                    <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                                </bg:adresAanduidingGrp>\n' +
        '                                            </bg:gerelateerde>\n' +
        '                                        </bg:heeftAlsHoofdLocatie>\n' +
        '                                    </woz:gerelateerde>\n' +
        '                                </woz:isEen>\n' +
        '                                <woz:soFiNummer xsi:nil="true"/>\n' +
        '                                <woz:aanvullingSoFiNummer xsi:nil="true"/>\n' +
        '                                <woz:verantwoordelijkeGemeente xsi:nil="true"/>\n' +
        '                                <woz:datumEindeSynchronisatie xsi:nil="true"/>\n' +
        '                            </woz:vestiging>\n' +
        '                        </woz:gerelateerde>\n' +
        '                        <woz:aanduidingEigenaarGebruiker xsi:nil="true"/>\n' +
        '                        <woz:statusBelang xsi:nil="true"/>\n' +
        '                        <woz:avr.aard xsi:nil="true"/>\n' +
        '                        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                        <stuf:tijdvakRelatie>\n' +
        '                            <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                            <stuf:eindRelatie xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakRelatie>\n' +
        '                        <stuf:tijdvakGeldigheid>\n' +
        '                            <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                            <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakGeldigheid>\n' +
        '                        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                    </woz:heeftBelanghebbende>\n' +
        '                    <woz:ligtIn stuf:entiteittype="WOZWSP">\n' +
        '                        <woz:gerelateerde stuf:entiteittype="WSP">\n' +
        '                            <woz:betrokkenWaterschap xsi:nil="true"/>\n' +
        '                            <woz:waterschapNaam xsi:nil="true"/>\n' +
        '                        </woz:gerelateerde>\n' +
        '                        <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                        <stuf:tijdvakRelatie>\n' +
        '                            <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakRelatie>\n' +
        '                        <stuf:tijdvakGeldigheid>\n' +
        '                            <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                            <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                        </stuf:tijdvakGeldigheid>\n' +
        '                        <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '                    </woz:ligtIn>\n' +
        '                </woz:gerelateerde>\n' +
        '            </woz:isVoor>\n';
    } else {
    t = ''}
    return t;
  }

  private getWordtVerdeeldNaar() {
    var t: string;
    if (this.wordtVerdeeldNaar) {
      t = '            <woz:wordtVerdeeldNaar stuf:entiteittype="WRDWSP">\n' +
        '                <woz:gerelateerde stuf:entiteittype="WSP">\n' +
        '                    <woz:betrokkenWaterschap xsi:nil="true"/>\n' +
        '                    <woz:waterschapNaam xsi:nil="true"/>\n' +
        '                </woz:gerelateerde>\n' +
        '                <woz:aandeelWaardeWaterschap xsi:nil="true"/>\n' +
        '                <stuf:tijdvakRelatie>\n' +
        '                    <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                    <stuf:eindRelatie xsi:nil="true"/>\n' +
        '                </stuf:tijdvakRelatie>\n' +
        '                <stuf:tijdvakGeldigheid>\n' +
        '                    <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                    <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                </stuf:tijdvakGeldigheid>\n' +
        '                <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '            </woz:wordtVerdeeldNaar>\n';
    } else {
      t = ''}
    return t;
  }

  private getIsBeschiktVoor() {
    var t: string;
    if (this.isBeschiktVoor) {
      t = '            <woz:isBeschiktVoor stuf:entiteittype="WRDSUB">\n' +
        '                <woz:gerelateerde>\n' +
        '                    <woz:natuurlijkPersoon stuf:entiteittype="NPS">\n' +
        '                        <woz:isEen stuf:entiteittype="NPSNPS">\n' +
        '                            <woz:gerelateerde stuf:entiteittype="NPS">\n' +
        '                                <bg:inp.bsn xsi:nil="true"/>\n' +
        '                                <bg:anp.identificatie xsi:nil="true"/>\n' +
        '                                <bg:geslachtsnaam xsi:nil="true"/>\n' +
        '                                <bg:voorletters xsi:nil="true"/>\n' +
        '                                <bg:aanduidingNaamgebruik xsi:nil="true"/>\n' +
        '                                <bg:geslachtsnaamPartner xsi:nil="true"/>\n' +
        '                                <bg:voorvoegselGeslachtsnaamPartner xsi:nil="true"/>\n' +
        '                                <bg:aanhefAanschrijving xsi:nil="true"/>\n' +
        '                                <bg:geslachtsnaamAanschrijving xsi:nil="true"/>\n' +
        '                                <bg:geslachtsaanduiding xsi:nil="true"/>\n' +
        '                                <bg:geboortedatum xsi:nil="true"/>\n' +
        '                                <bg:overlijdensdatum xsi:nil="true"/>\n' +
        '                                <bg:inp.verblijftIn stuf:entiteittype="NPSTGO">\n' +
        '                                    <bg:gerelateerde stuf:entiteittype="TGO">\n' +
        '                                        <bg:identificatie xsi:nil="true"/>\n' +
        '                                        <bg:adresAanduidingGrp>\n' +
        '                                            <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                            <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                            <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                        </bg:adresAanduidingGrp>\n' +
        '                                    </bg:gerelateerde>\n' +
        '                                </bg:inp.verblijftIn>\n' +
        '                                <bg:verblijfsadres>\n' +
        '                                    <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                    <bg:inp.locatiebeschrijving xsi:nil="true"/>\n' +
        '                                </bg:verblijfsadres>\n' +
        '                                <bg:sub.verblijfBuitenland>\n' +
        '                                    <bg:lnd.landcode xsi:nil="true"/>\n' +
        '                                    <bg:lnd.landnaam xsi:nil="true"/>\n' +
        '                                    <bg:sub.adresBuitenland1 xsi:nil="true"/>\n' +
        '                                    <bg:sub.adresBuitenland2 xsi:nil="true"/>\n' +
        '                                    <bg:sub.adresBuitenland3 xsi:nil="true"/>\n' +
        '                                </bg:sub.verblijfBuitenland>\n' +
        '                                <bg:sub.correspondentieAdres>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                    <bg:sub.postadresType xsi:nil="true"/>\n' +
        '                                    <bg:sub.postadresNummer xsi:nil="true"/>\n' +
        '                                </bg:sub.correspondentieAdres>\n' +
        '                                <bg:inp.indicatieGeheim xsi:nil="true"/>\n' +
        '                            </woz:gerelateerde>\n' +
        '                        </woz:isEen>\n' +
        '                        <woz:soFiNummer xsi:nil="true"/>\n' +
        '                        <woz:aanvullingSoFiNummer xsi:nil="true"/>\n' +
        '                        <woz:verantwoordelijkeGemeente xsi:nil="true"/>\n' +
        '                        <woz:datumEindeSynchronisatie xsi:nil="true"/>\n' +
        '                    </woz:natuurlijkPersoon>\n' +
        '                    <woz:nietNatuurlijkPersoon stuf:entiteittype="NNP">\n' +
        '                        <woz:isEen stuf:entiteittype="NNPNNP">\n' +
        '                            <woz:gerelateerde stuf:entiteittype="NNP">\n' +
        '                                <bg:inn.nnpId xsi:nil="true"/>\n' +
        '                                <bg:ann.identificatie xsi:nil="true"/>\n' +
        '                                <bg:statutaireNaam xsi:nil="true"/>\n' +
        '                                <bg:sub.correspondentieAdres>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                    <bg:sub.postadresType xsi:nil="true"/>\n' +
        '                                    <bg:sub.postadresNummer xsi:nil="true"/>\n' +
        '                                </bg:sub.correspondentieAdres>\n' +
        '                                <bg:sub.verblijfBuitenland>\n' +
        '                                    <bg:lnd.landcode xsi:nil="true"/>\n' +
        '                                    <bg:lnd.landnaam xsi:nil="true"/>\n' +
        '                                    <bg:sub.adresBuitenland1 xsi:nil="true"/>\n' +
        '                                    <bg:sub.adresBuitenland2 xsi:nil="true"/>\n' +
        '                                    <bg:sub.adresBuitenland3 xsi:nil="true"/>\n' +
        '                                </bg:sub.verblijfBuitenland>\n' +
        '                                <bg:rps.isEigenaarVan stuf:entiteittype="NNPMAC">\n' +
        '                                    <bg:gerelateerde stuf:entiteittype="MAC">\n' +
        '                                        <bg:kvkNummer xsi:nil="true"/>\n' +
        '                                    </bg:gerelateerde>\n' +
        '                                </bg:rps.isEigenaarVan>\n' +
        '                            </woz:gerelateerde>\n' +
        '                        </woz:isEen>\n' +
        '                        <woz:aanvullingSoFiNummer xsi:nil="true"/>\n' +
        '                        <woz:verantwoordelijkeGemeente xsi:nil="true"/>\n' +
        '                        <woz:datumEindeSynchronisatie xsi:nil="true"/>\n' +
        '                    </woz:nietNatuurlijkPersoon>\n' +
        '                    <woz:vestiging stuf:entiteittype="VES">\n' +
        '                        <woz:isEen stuf:entiteittype="VESVES">\n' +
        '                            <woz:gerelateerde stuf:entiteittype="VES">\n' +
        '                                <bg:vestigingsNummer xsi:nil="true"/>\n' +
        '                                <bg:handelsnaam xsi:nil="true"/>\n' +
        '                                <bg:verblijfsadres>\n' +
        '                                    <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                    <bg:inp.locatiebeschrijving xsi:nil="true"/>\n' +
        '                                </bg:verblijfsadres>\n' +
        '                                <bg:sub.verblijfBuitenland>\n' +
        '                                    <bg:lnd.landcode xsi:nil="true"/>\n' +
        '                                    <bg:lnd.landnaam xsi:nil="true"/>\n' +
        '                                    <bg:sub.adresBuitenland1 xsi:nil="true"/>\n' +
        '                                    <bg:sub.adresBuitenland2 xsi:nil="true"/>\n' +
        '                                    <bg:sub.adresBuitenland3 xsi:nil="true"/>\n' +
        '                                </bg:sub.verblijfBuitenland>\n' +
        '                                <bg:sub.correspondentieAdres>\n' +
        '                                    <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                    <bg:postcode xsi:nil="true"/>\n' +
        '                                    <bg:aoa.identificatie xsi:nil="true"/>\n' +
        '                                    <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                    <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                    <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                    <bg:sub.postadresType xsi:nil="true"/>\n' +
        '                                    <bg:sub.postadresNummer xsi:nil="true"/>\n' +
        '                                </bg:sub.correspondentieAdres>\n' +
        '                                <bg:oefentActiviteitenUitVoor stuf:entiteittype="VESMAC">\n' +
        '                                    <bg:gerelateerde stuf:entiteittype="MAC">\n' +
        '                                        <bg:kvkNummer xsi:nil="true"/>\n' +
        '                                    </bg:gerelateerde>\n' +
        '                                </bg:oefentActiviteitenUitVoor>\n' +
        '                                <bg:heeftAlsHoofdLocatie stuf:entiteittype="VESTGOHFD">\n' +
        '                                    <bg:gerelateerde stuf:entiteittype="TGO">\n' +
        '                                        <bg:identificatie xsi:nil="true"/>\n' +
        '                                        <bg:adresAanduidingGrp>\n' +
        '                                            <bg:num.identificatie xsi:nil="true"/>\n' +
        '                                            <bg:wpl.woonplaatsNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.openbareRuimteNaam xsi:nil="true"/>\n' +
        '                                            <bg:gor.straatnaam xsi:nil="true"/>\n' +
        '                                            <bg:aoa.postcode xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummer xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisletter xsi:nil="true"/>\n' +
        '                                            <bg:aoa.huisnummertoevoeging xsi:nil="true"/>\n' +
        '                                        </bg:adresAanduidingGrp>\n' +
        '                                    </bg:gerelateerde>\n' +
        '                                </bg:heeftAlsHoofdLocatie>\n' +
        '                            </woz:gerelateerde>\n' +
        '                        </woz:isEen>\n' +
        '                        <woz:soFiNummer xsi:nil="true"/>\n' +
        '                        <woz:aanvullingSoFiNummer xsi:nil="true"/>\n' +
        '                        <woz:verantwoordelijkeGemeente xsi:nil="true"/>\n' +
        '                        <woz:datumEindeSynchronisatie xsi:nil="true"/>\n' +
        '                    </woz:vestiging>\n' +
        '                </woz:gerelateerde>\n' +
        '                <woz:statusBeschikking xsi:nil="true"/>\n' +
        '                <woz:brondocument stuf:metagegeven="true">\n' +
        '                    <bg:identificatie xsi:nil="true"/>\n' +
        '                    <bg:datum xsi:nil="true"/>\n' +
        '                </woz:brondocument>\n' +
        '                <stuf:tijdvakRelatie>\n' +
        '                    <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                    <stuf:eindRelatie xsi:nil="true"/>\n' +
        '                </stuf:tijdvakRelatie>\n' +
        '                <stuf:tijdvakGeldigheid>\n' +
        '                    <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                    <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                </stuf:tijdvakGeldigheid>\n' +
        '                <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '            </woz:isBeschiktVoor>\n';
    } else {
      t = ''}
    return t;
  }

}
