import {Checkbox} from './checkbox';

export class SWOBuilder {

  private omvat: boolean = false;
  private ligtIn: boolean = false;

  public xmlString: string = this.makeText();

  constructor(cb: Checkbox []) {
  this.omvat = false;
  this.ligtIn = false;

    for (var i = 0; cb && i < cb.length; i++) {
      switch (cb[i].name) {
        case 'omvat' :
          this.omvat = true;
          break;
        case 'ligtIn' :
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
      this.getOmvat() +
      this.getLigtIn() +
      this.xmlString02;
    return this.xmlString;
  }

  private xmlString01: string = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<lv:swoLv01-lvwoz xmlns:stuf="http://www.egem.nl/StUF/StUF0301" xmlns:bg="http://www.egem.nl/StUF/sector/bg/0310"\n' +
    '                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
    '                  xmlns:woz="http://www.stufstandaarden.nl/sectormodel/woz0313"\n' +
    '                  xmlns:lv="http://www.stufstandaarden.nl/koppelvlak/woz0313/lv0100"\n' +
    '                  xsi:schemaLocation="http://www.stufstandaarden.nl/koppelvlak/woz0313/lv0100 lv0100_msg_vraagAntwoord.xsd">\n' +
    '    <woz:stuurgegevens>\n' +
    '        <stuf:berichtcode>Lv01</stuf:berichtcode>\n' +
    '        <stuf:zender>\n' +
    '            <stuf:organisatie>0</stuf:organisatie>\n' +
    '            <stuf:applicatie>app</stuf:applicatie>\n' +
    '            <stuf:administratie>ac</stuf:administratie>\n' +
    '            <stuf:gebruiker>b</stuf:gebruiker>\n' +
    '        </stuf:zender>\n' +
    '        <stuf:ontvanger>\n' +
    '            <stuf:organisatie>o</stuf:organisatie>\n' +
    '            <stuf:applicatie>app</stuf:applicatie>\n' +
    '            <stuf:administratie>a</stuf:administratie>\n' +
    '            <stuf:gebruiker>g</stuf:gebruiker>\n' +
    '        </stuf:ontvanger>\n' +
    '        <stuf:referentienummer>r</stuf:referentienummer>\n' +
    '        <stuf:tijdstipBericht>20180301153040000</stuf:tijdstipBericht>\n' +
    '        <stuf:entiteittype>SWO</stuf:entiteittype>\n' +
    '    </woz:stuurgegevens>\n' +
    '    <woz:parameters>\n' +
    '        <stuf:sortering>1</stuf:sortering>\n' +
    '        <stuf:indicatorVervolgvraag>false</stuf:indicatorVervolgvraag>\n' +
    '        <stuf:maximumAantal>15</stuf:maximumAantal>\n' +
    '        <stuf:indicatorAfnemerIndicatie>false</stuf:indicatorAfnemerIndicatie>\n' +
    '        <stuf:indicatorAantal>false</stuf:indicatorAantal>\n' +
    '    </woz:parameters>\n' +
    '    <woz:gelijk stuf:entiteittype="SWO">\n' +
    '        <woz:wozObjectNummer>123456789012</woz:wozObjectNummer>\n' +
    '        <woz:verantwoordelijkeGemeente>\n' +
    '            <bg:gemeenteCode>0342</bg:gemeenteCode>\n' +
    '        </woz:verantwoordelijkeGemeente>\n' +
    '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
    '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
    '                <bg:kadastraleIdentificatie>123456789012345</bg:kadastraleIdentificatie>\n' +
    '                <bg:kadastraleAanduiding>\n' +
    '                    <bg:kadastraleGemeentecode>b</bg:kadastraleGemeentecode>\n' +
    '                    <bg:kadastraleSectie>s</bg:kadastraleSectie>\n' +
    '                    <bg:kadastraalPerceelnummer>1234</bg:kadastraalPerceelnummer>\n' +
    '                    <bg:kdp.deelperceelNummer>1235</bg:kdp.deelperceelNummer>\n' +
    '                </bg:kadastraleAanduiding>\n' +
    '            </woz:gerelateerde>\n' +
    '        </woz:omvat>\n' +
    '    </woz:gelijk>\n' +
    '    <woz:vanaf stuf:entiteittype="SWO">\n' +
    '        <woz:wozObjectNummer>123456789012</woz:wozObjectNummer>\n' +
    '        <woz:verantwoordelijkeGemeente>\n' +
    '            <bg:gemeenteCode>0342</bg:gemeenteCode>\n' +
    '        </woz:verantwoordelijkeGemeente>\n' +
    '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
    '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
    '                <bg:kadastraleIdentificatie>123456789012345</bg:kadastraleIdentificatie>\n' +
    '                <bg:kadastraleAanduiding>\n' +
    '                    <bg:kadastraleGemeentecode>b</bg:kadastraleGemeentecode>\n' +
    '                    <bg:kadastraleSectie>s</bg:kadastraleSectie>\n' +
    '                    <bg:kadastraalPerceelnummer>1234</bg:kadastraalPerceelnummer>\n' +
    '                    <bg:kdp.deelperceelNummer>1235</bg:kdp.deelperceelNummer>\n' +
    '                </bg:kadastraleAanduiding>\n' +
    '            </woz:gerelateerde>\n' +
    '        </woz:omvat>\n' +
    '    </woz:vanaf>\n' +
    '    <woz:totEnMet stuf:entiteittype="SWO">\n' +
    '        <woz:wozObjectNummer>123456789012</woz:wozObjectNummer>\n' +
    '        <woz:verantwoordelijkeGemeente>\n' +
    '            <bg:gemeenteCode>0342</bg:gemeenteCode>\n' +
    '        </woz:verantwoordelijkeGemeente>\n' +
    '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
    '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
    '                <bg:kadastraleIdentificatie>123456789012345</bg:kadastraleIdentificatie>\n' +
    '                <bg:kadastraleAanduiding>\n' +
    '                    <bg:kadastraleGemeentecode>b</bg:kadastraleGemeentecode>\n' +
    '                    <bg:kadastraleSectie>s</bg:kadastraleSectie>\n' +
    '                    <bg:kadastraalPerceelnummer>1234</bg:kadastraalPerceelnummer>\n' +
    '                    <bg:kdp.deelperceelNummer>1235</bg:kdp.deelperceelNummer>\n' +
    '                </bg:kadastraleAanduiding>\n' +
    '            </woz:gerelateerde>\n' +
    '        </woz:omvat>\n' +
    '    </woz:totEnMet>\n' +
    '    <woz:scope>\n' +
    '        <woz:object stuf:entiteittype="SWO">\n' +
    '            <woz:wozObjectNummer xsi:nil="true"/>\n' +
    '            <woz:statusWozObject xsi:nil="true"/>\n' +
    '            <woz:grondoppervlakte xsi:nil="true"/>\n' +
    '            <woz:codeGebouwdOngebouwd xsi:nil="true"/>\n' +
    '            <woz:meegetaxeerdeOppervlakteGebouwd xsi:nil="true"/>\n' +
    '            <woz:verantwoordelijkeGemeente>\n' +
    '                <bg:gemeenteCode xsi:nil="true"/>\n' +
    '                <bg:gemeenteNaam xsi:nil="true"/>\n' +
    '            </woz:verantwoordelijkeGemeente>\n' +
    '            <woz:wozObjectGeometrie xsi:nil="true"/>\n' +
    '            <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
    '            <woz:ingangsdatumObject xsi:nil="true"/>\n' +
    '            <woz:einddatumObject xsi:nil="true"/>\n' +
    '            <stuf:tijdvakGeldigheid>\n' +
    '                <stuf:beginGeldigheid xsi:nil="true"/>\n' +
    '                <stuf:eindGeldigheid xsi:nil="true"/>\n' +
    '            </stuf:tijdvakGeldigheid>\n' +
    '            <stuf:tijdstipRegistratie xsi:nil="true"/>\n';

  private xmlString02: string = '        </woz:object>\n' +
    '    </woz:scope>\n' +
    '</lv:swoLv01-lvwoz>\n';

  private getOmvat() {
    var t: string;
    if (this.omvat) {
      t = '            <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
        '                <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
        '                    <bg:kadastraleIdentificatie xsi:nil="true"/>\n' +
        '                    <bg:kadastraleAanduiding>\n' +
        '                        <bg:kadastraleGemeentecode xsi:nil="true"/>\n' +
        '                        <bg:kadastraleSectie xsi:nil="true"/>\n' +
        '                        <bg:kadastraalPerceelnummer xsi:nil="true"/>\n' +
        '                        <bg:kdp.deelperceelNummer xsi:nil="true"/>\n' +
        '                    </bg:kadastraleAanduiding>\n' +
        '                    <bg:ingangsdatumObject xsi:nil="true"/>\n' +
        '                    <bg:einddatumObject xsi:nil="true"/>\n' +
        '                </woz:gerelateerde>\n' +
        '                <woz:toegekendeOppervlakte xsi:nil="true"/>\n' +
        '                <woz:meegetaxeerdeOppervlakte xsi:nil="true"/>\n' +
        '                <woz:inOnderzoek stuf:metagegeven="true" xsi:nil="true"/>\n' +
        '                <stuf:tijdvakRelatie>\n' +
        '                    <stuf:beginRelatie xsi:nil="true"/>\n' +
        '                    <stuf:eindRelatie xsi:nil="true"/>\n' +
        '                </stuf:tijdvakRelatie>\n' +
        '                <stuf:tijdvakGeldigheid>\n' +
        '                    <stuf:beginGeldigheid xsi:nil="true"/>\n' +
        '                    <stuf:eindGeldigheid xsi:nil="true"/>\n' +
        '                </stuf:tijdvakGeldigheid>\n' +
        '                <stuf:tijdstipRegistratie xsi:nil="true"/>\n' +
        '            </woz:omvat>\n';
    } else {
      t = '';
    }
    return t;
    }

  private getLigtIn() {
    var t: string;
    if (this.ligtIn) {
      t = '            <woz:ligtIn stuf:entiteittype="SWOWSP">\n' +
        '                <woz:gerelateerde stuf:entiteittype="WSP"/>\n' +
        '            </woz:ligtIn>\n';
    } else {
      t = '';
    }
    return t;
  }
}
