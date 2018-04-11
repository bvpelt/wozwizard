import {Checkbox} from './checkbox';
import {Keyvalue} from './keyvalue';
import {Sortering} from './sortering';

export class SWOBuilder {

    public xmlString: string = this.makeText();
    private omvat: boolean = false;
    private ligtIn: boolean = false;

    private sortering: Sortering;
    private fields: Array<Keyvalue>;

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
        '    </woz:parameters>\n';
    /* Criteria
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
    */
    private xmlString02: string = '    <woz:scope>\n' +
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

    private xmlString03: string = '        </woz:object>\n' +
        '    </woz:scope>\n' +
        '</lv:swoLv01-lvwoz>\n';

    constructor(cb: Checkbox [], sortering: Sortering, fields: Array<Keyvalue>) {
        this.omvat = false;
        this.ligtIn = false;
        this.sortering = sortering;
        this.fields = fields;

        // relaties
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
        var criteria: string = '';

        if (this.sortering) {
            switch (this.sortering.id) {
                case 1: { // wozObjectNummer
                    criteria = this.makeCriteriaWozObjectNummer();
                }
                case 2: { // kadastraleIdentificatie
                    criteria = this.makeCriteriaKadastraleIdentificatie();
                }
                case 3: { // 'kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer'
                    criteria = this.makeCriteriaKadastraleAanduiding01();
                }
                case 4: { // 'kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer'
                    criteria = this.makeCriteriaKadastraleAanduiding01();
                }
                case 5: { // 'kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'deelperceelnummer'
                    criteria = this.makeCriteriaKadastraleAanduiding02();
                }
                case 6: { // 'kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'appartementsindex'
                    criteria = this.makeCriteriaKadastraleAanduiding03();
                }
                case 7: { //  betrokkenWaterschap
                    criteria = this.makeCriteriaBetrokkenWaterschap();
                }
                default:
            }
        }

        this.xmlString = this.xmlString01 +
            criteria +
            this.xmlString02 +
            this.getOmvat() +
            this.getLigtIn() +
            this.xmlString03;
        return this.xmlString;
    }

    private makeCriteriaWozObjectNummer() {
        var criteria: string;

        if (!this.fields[0].maxvalue || this.fields[0].maxvalue.length == 0) {
            // gelijk
            criteria = '    <woz:gelijk stuf:entiteittype="SWO">\n' +
                '        <woz:wozObjectNummer>' + this.fields[0].value + '</woz:wozObjectNummer>\n' +
                '    </woz:gelijk>\n';
        } else {
            // vanaf en t/m
            criteria = '    <woz:vanaf stuf:entiteittype="SWO">\n' +
                '        <woz:wozObjectNummer>' + this.fields[0].value + ' </woz:wozObjectNummer>\n' +
                '    </woz:vanaf>\n' +
                '    <woz:totEnMet stuf:entiteittype="SWO">\n' +
                '        <woz:wozObjectNummer>' + this.fields[0].value + ' </woz:wozObjectNummer>\n' +
                '    </woz:totEnMet>\n';
        }
        return criteria;
    }

    private makeCriteriaKadastraleIdentificatie() {
        var criteria: string;

        if (!this.fields[0].maxvalue || this.fields[0].maxvalue.length == 0) {
            // gelijk
            criteria = '    <woz:gelijk stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleIdentificatie>' + this.fields[0].value + ' </bg:kadastraleIdentificatie>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:gelijk>\n';

        } else {
            // vanaf en t/m
            criteria = '    <woz:vanaf stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleIdentificatie>' + this.fields[0].value + ' </bg:kadastraleIdentificatie>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:vanaf>\n' +
                '    <woz:totEnMet stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleIdentificatie>' + this.fields[0].maxvalue + ' </bg:kadastraleIdentificatie>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:totEnMet>\n';
        }
        return criteria;
    }

    private makeCriteriaKadastraleAanduiding01() {
        var criteria: string;

        // bepaal of hier gebruik gemaakt wordt van gelijk of vanaf - t/m
        // door voor alle op gegeven velden vast te stellen dat alleen field.value ingevuld is,
        // of vast te stellen dat voor alle velden field.value en field.maxvalue ingevuld is

        var sumval: number = 0;
        var summaxval: number = 0;

        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i].value && this.fields[i].value.length > 0) {
                sumval += 1;
            }
            if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) {
                summaxval += 1;
            }
        }

        var vanaf: boolean = (sumval == summaxval);
        //console.log('vanaf: ' + vanaf + ' val: ' + sumval + ' maxval: ' + summaxval);
        var c1: string;
        var c2: string;
        var c3: string;
        var c4: string;
        var c5: string;
        var c6: string;
        var c7: string;
        var c8: string;


        if ((vanaf == false) && this.fields[0].value && this.fields[0].value.length > 0) {
            // gelijk
            c1 = '    <woz:gelijk stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleAanduiding>\n' +
                '                    <bg:kadastraleGemeentecode>' + this.fields[0].value + ' </bg:kadastraleGemeentecode>\n';
            if (this.fields[1].value && this.fields[1].value.length > 0) {
                c2 = '                    <bg:kadastraleSectie>' + this.fields[1].value + ' </bg:kadastraleSectie>\n';
            } else {
                c2 = '';
            }
            if (this.fields[2].value || this.fields[2].value.length > 0) {
                c3 = '                    <bg:kadastraalPerceelnummer>' + this.fields[2].value + ' </bg:kadastraalPerceelnummer>\n';
            } else {
                c3 = '';
            }
            c4 = '                </bg:kadastraleAanduiding>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:gelijk>\n';

            criteria = c1 + c2 + c3 + c4;
        } else {
            // vanaf en t/m
            c1 = '    <woz:vanaf stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleAanduiding>\n' +
                '                    <bg:kadastraleGemeentecode>' + this.fields[0].value + ' </bg:kadastraleGemeentecode>\n';

            if (this.fields[1].value && this.fields[1].value.length > 0) {
                c2 = '                    <bg:kadastraleSectie>' + this.fields[1].value + ' </bg:kadastraleSectie>\n';
            } else {
                c2 = '';
            }
            if (this.fields[2].value && this.fields[2].value.length > 0) {
                c3 = '                    <bg:kadastraalPerceelnummer>' + this.fields[2].value + ' </bg:kadastraalPerceelnummer>\n';
            } else {
                c3 = '';
            }
            c4 = '                </bg:kadastraleAanduiding>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:vanaf>\n';

            c5 = '    <woz:totEnMet stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleAanduiding>\n' +
                '                    <bg:kadastraleGemeentecode>' + this.fields[0].maxvalue + ' </bg:kadastraleGemeentecode>\n';
            if (this.fields[1].maxvalue && this.fields[1].maxvalue.length > 0) {
                c6 = '                    <bg:kadastraleSectie>' + this.fields[1].maxvalue + ' </bg:kadastraleSectie>\n';
            } else {
                c6 = '';
            }
            if (this.fields[2].maxvalue && this.fields[2].maxvalue.length > 0) {
                c7 = '                    <bg:kadastraalPerceelnummer>' + this.fields[2].maxvalue + ' </bg:kadastraalPerceelnummer>\n';
            } else {
                c7 = '';
            }
            c8 = '                </bg:kadastraleAanduiding>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:totEnMet>\n';
            criteria = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8;
        }
        return criteria;
    }


    private makeCriteriaKadastraleAanduiding02() {
        var criteria: string;

        // bepaal of hier gebruik gemaakt wordt van gelijk of vanaf - t/m
        // door voor alle op gegeven velden vast te stellen dat alleen field.value ingevuld is,
        // of vast te stellen dat voor alle velden field.value en field.maxvalue ingevuld is

        var sumval: number = 0;
        var summaxval: number = 0;

        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i].value && this.fields[i].value.length > 0) {
                sumval += 1;
            }
            if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) {
                summaxval += 1;
            }
        }

        var vanaf: boolean = (sumval == summaxval);
        //console.log('vanaf: ' + vanaf + ' val: ' + sumval + ' maxval: ' + summaxval);
        var c1: string;
        var c2: string;
        var c3: string;
        var c4: string;
        var c5: string;
        var c6: string;
        var c7: string;
        var c8: string;
        var c9: string;
        var c10: string;


        if ((vanaf == false) && this.fields[0].value && this.fields[0].value.length > 0) {
            // gelijk
            c1 = '    <woz:gelijk stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleAanduiding>\n' +
                '                    <bg:kadastraleGemeentecode>' + this.fields[0].value + ' </bg:kadastraleGemeentecode>\n';
            if (this.fields[1].value && this.fields[1].value.length > 0) {
                c2 = '                    <bg:kadastraleSectie>' + this.fields[1].value + ' </bg:kadastraleSectie>\n';
            } else {
                c2 = '';
            }
            if (this.fields[2].value || this.fields[2].value.length > 0) {
                c3 = '                    <bg:kadastraalPerceelnummer>' + this.fields[2].value + ' </bg:kadastraalPerceelnummer>\n';
            } else {
                c3 = '';
            }
            if (this.fields[3].value || this.fields[3].value.length > 0) {
                c4 = '                    <bg:kdp.deelperceelNummer>' + this.fields[3].value + ' </bg:kdp.deelperceelNummer>\n';
            } else {
                c4 = '';
            }
            c5 = '                </bg:kadastraleAanduiding>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:gelijk>\n';

            criteria = c1 + c2 + c3 + c4 + c5;
        } else {
            // vanaf en t/m
            c1 = '    <woz:vanaf stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleAanduiding>\n' +
                '                    <bg:kadastraleGemeentecode>' + this.fields[0].value + ' </bg:kadastraleGemeentecode>\n';

            if (this.fields[1].value && this.fields[1].value.length > 0) {
                c2 = '                    <bg:kadastraleSectie>' + this.fields[1].value + ' </bg:kadastraleSectie>\n';
            } else {
                c2 = '';
            }
            if (this.fields[2].value && this.fields[2].value.length > 0) {
                c3 = '                    <bg:kadastraalPerceelnummer>' + this.fields[2].value + ' </bg:kadastraalPerceelnummer>\n';
            } else {
                c3 = '';
            }
            if (this.fields[3].value && this.fields[3].value.length > 0) {
                c4 = '                    <bg:kdp.deelperceelNummer>' + this.fields[3].value + ' </bg:kdp.deelperceelNummer>\n';
            } else {
                c4 = '';
            }

            c5 = '                </bg:kadastraleAanduiding>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:vanaf>\n';

            c6 = '    <woz:totEnMet stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleAanduiding>\n' +
                '                    <bg:kadastraleGemeentecode>' + this.fields[0].maxvalue + ' </bg:kadastraleGemeentecode>\n';
            if (this.fields[1].maxvalue && this.fields[1].maxvalue.length > 0) {
                c7 = '                    <bg:kadastraleSectie>' + this.fields[1].maxvalue + ' </bg:kadastraleSectie>\n';
            } else {
                c7 = '';
            }
            if (this.fields[2].maxvalue && this.fields[2].maxvalue.length > 0) {
                c8 = '                    <bg:kadastraalPerceelnummer>' + this.fields[2].maxvalue + ' </bg:kadastraalPerceelnummer>\n';
            } else {
                c8 = '';
            }
            if (this.fields[3].maxvalue && this.fields[3].maxvalue.length > 0) {
                c9 = '                    <bg:kdp.deelperceelNummer>' + this.fields[3].maxvalue + ' </bg:kdp.deelperceelNummer>\n';
            } else {
                c9 = '';
            }
            c10 = '                </bg:kadastraleAanduiding>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:totEnMet>\n';
            criteria = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10;
        }
        return criteria;
    }

    private makeCriteriaKadastraleAanduiding03() {
        var criteria: string;

        // bepaal of hier gebruik gemaakt wordt van gelijk of vanaf - t/m
        // door voor alle op gegeven velden vast te stellen dat alleen field.value ingevuld is,
        // of vast te stellen dat voor alle velden field.value en field.maxvalue ingevuld is

        var sumval: number = 0;
        var summaxval: number = 0;

        for (var i = 0; this.fields && i < this.fields.length; i++) {
            if (this.fields[i].value && this.fields[i].value.length > 0) {
                sumval += 1;
            }
            if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) {
                summaxval += 1;
            }
        }

        var vanaf: boolean = (sumval == summaxval);
        //console.log('vanaf: ' + vanaf + ' val: ' + sumval + ' maxval: ' + summaxval);
        var c1: string;
        var c2: string;
        var c3: string;
        var c4: string;
        var c5: string;
        var c6: string;
        var c7: string;
        var c8: string;
        var c9: string;
        var c10: string;


        if ((vanaf == false) && this.fields[0].value && this.fields[0].value.length > 0) {
            // gelijk
            c1 = '    <woz:gelijk stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleAanduiding>\n' +
                '                    <bg:kadastraleGemeentecode>' + this.fields[0].value + ' </bg:kadastraleGemeentecode>\n';
            if (this.fields[1].value && this.fields[1].value.length > 0) {
                c2 = '                    <bg:kadastraleSectie>' + this.fields[1].value + ' </bg:kadastraleSectie>\n';
            } else {
                c2 = '';
            }
            if (this.fields[2].value || this.fields[2].value.length > 0) {
                c3 = '                    <bg:kadastraalPerceelnummer>' + this.fields[2].value + ' </bg:kadastraalPerceelnummer>\n';
            } else {
                c3 = '';
            }
            if (this.fields[3].value || this.fields[3].value.length > 0) {
                c4 = '                    <bg:apr.appartementsIndex>' + this.fields[3].value + ' </bg:apr.appartementsIndex>\n';
            } else {
                c4 = '';
            }
            c5 = '                </bg:kadastraleAanduiding>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:gelijk>\n';

            criteria = c1 + c2 + c3 + c4 + c5;
        } else {
            // vanaf en t/m
            c1 = '    <woz:vanaf stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleAanduiding>\n' +
                '                    <bg:kadastraleGemeentecode>' + this.fields[0].value + ' </bg:kadastraleGemeentecode>\n';

            if (this.fields[1].value && this.fields[1].value.length > 0) {
                c2 = '                    <bg:kadastraleSectie>' + this.fields[1].value + ' </bg:kadastraleSectie>\n';
            } else {
                c2 = '';
            }
            if (this.fields[2].value && this.fields[2].value.length > 0) {
                c3 = '                    <bg:kadastraalPerceelnummer>' + this.fields[2].value + ' </bg:kadastraalPerceelnummer>\n';
            } else {
                c3 = '';
            }
            if (this.fields[3].value && this.fields[3].value.length > 0) {
                c4 = '                    <bg:apr.appartementsIndex>' + this.fields[3].value + ' </bg:apr.appartementsIndex>\n';
            } else {
                c4 = '';
            }

            c5 = '                </bg:kadastraleAanduiding>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:vanaf>\n';

            c6 = '    <woz:totEnMet stuf:entiteittype="SWO">\n' +
                '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
                '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
                '                <bg:kadastraleAanduiding>\n' +
                '                    <bg:kadastraleGemeentecode>' + this.fields[0].maxvalue + ' </bg:kadastraleGemeentecode>\n';
            if (this.fields[1].maxvalue && this.fields[1].maxvalue.length > 0) {
                c7 = '                    <bg:kadastraleSectie>' + this.fields[1].maxvalue + ' </bg:kadastraleSectie>\n';
            } else {
                c7 = '';
            }
            if (this.fields[2].maxvalue && this.fields[2].maxvalue.length > 0) {
                c8 = '                    <bg:kadastraalPerceelnummer>' + this.fields[2].maxvalue + ' </bg:kadastraalPerceelnummer>\n';
            } else {
                c8 = '';
            }
            if (this.fields[3].maxvalue && this.fields[3].maxvalue.length > 0) {
                c9 = '                    <bg:apr.appartementsIndex>' + this.fields[3].maxvalue + ' </bg:apr.appartementsIndex>\n';
            } else {
                c9 = '';
            }
            c10 = '                </bg:kadastraleAanduiding>\n' +
                '            </woz:gerelateerde>\n' +
                '        </woz:omvat>\n' +
                '    </woz:totEnMet>\n';
            criteria = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10;
        }
        return criteria;
    }

    private makeCriteriaBetrokkenWaterschap() {
        var criteria: string;

        if (!this.fields[0].maxvalue || this.fields[0].maxvalue.length == 0) {
            // gelijk
            criteria = '    <woz:gelijk stuf:entiteittype="SWO">\n' +
                '        <woz:wozObjectNummer>' + this.fields[0].value + '</woz:wozObjectNummer>\n' +
                '    </woz:gelijk>\n';
        } else {
            // vanaf en t/m
            criteria = '    <woz:vanaf stuf:entiteittype="SWO">\n' +
                '        <woz:wozObjectNummer>' + this.fields[0].value + ' </woz:wozObjectNummer>\n' +
                '    </woz:vanaf>\n' +
                '    <woz:totEnMet stuf:entiteittype="SWO">\n' +
                '        <woz:wozObjectNummer>' + this.fields[0].value + ' </woz:wozObjectNummer>\n' +
                '    </woz:totEnMet>\n';
        }
        return criteria;
    }
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
