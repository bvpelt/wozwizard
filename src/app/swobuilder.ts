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
        '            <stuf:organisatie>00000001802327497000</stuf:organisatie>\n' +
        '            <stuf:applicatie>LVWOZ</stuf:applicatie>\n' +
        '            <stuf:administratie>P</stuf:administratie>\n' +
        /*'            <stuf:gebruiker>g</stuf:gebruiker>\n' + */
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
                    break;
                }
                case 2: { // kadastraleIdentificatie
                    criteria = this.makeCriteriaKadastraleIdentificatie();
                    break;
                }
                case 3: { // 'kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer'
                    criteria = this.makeCriteriaKadastraleAanduiding01();
                    break;
                }
                case 4: { // 'kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer'
                    criteria = this.makeCriteriaKadastraleAanduiding01();
                    break;
                }
                case 5: { // 'kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'deelperceelnummer'
                    criteria = this.makeCriteriaKadastraleAanduiding02();
                    break;
                }
                case 6: { // 'kadastraleGemeenteCode', 'kadastraleSectie', 'perceelnummer', 'appartementsindex'
                    criteria = this.makeCriteriaKadastraleAanduiding03();
                    break;
                }
                case 7: { //  betrokkenWaterschap
                    criteria = this.makeCriteriaBetrokkenWaterschap();
                    break;
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

        var omvatkadaand = '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
            '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
            '                <bg:kadastraleAanduiding>\n';
        var omvataand = '                </bg:kadastraleAanduiding>\n' +
            '            </woz:gerelateerde>\n' +
            '        </woz:omvat>\n';

        var gelijkBegin: string = '    <woz:gelijk stuf:entiteittype="SWO">\n' + omvatkadaand;
        var gelijkEind: string = omvataand + '    </woz:gelijk>\n';

        var vanafBegin: string = '    <woz:vanaf stuf:entiteittype="SWO">\n' + omvatkadaand;
        var vanafEind: string = omvataand + '    </woz:vanaf>\n';

        var tmBegin: string = '    <woz:totEnMet stuf:entiteittype="SWO">\n' + omvatkadaand;
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
                                this.fields[0].maxvalue +
                                ' </bg:kadastraleGemeentecode>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].value +
                                ' </bg:kadastraleGemeentecode>\n';
                        }
                        break;
                    case 1: // kadsectie
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                ' </bg:kadastraleSectie>\n';
                            tm += '                    <bg:kadastraleSectie>' +
                                this.fields[i].maxvalue +
                                ' </bg:kadastraleSectie>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                ' </bg:kadastraleSectie>\n';
                        }

                        break;
                    case 2: // kadperceel
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value + ' </bg:kadastraalPerceelnummer>\n';
                            tm += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].maxvalue + ' </bg:kadastraalPerceelnummer>\n';
                        } else {
                            gelijk += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value +
                                ' </bg:kadastraalPerceelnummer>\n';
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


    private makeCriteriaKadastraleAanduiding02() {
        var criteria: string;

        var omvatkadaand = '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
            '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
            '                <bg:kadastraleAanduiding>\n';
        var omvataand = '                </bg:kadastraleAanduiding>\n' +
            '            </woz:gerelateerde>\n' +
            '        </woz:omvat>\n';

        var gelijkBegin: string = '    <woz:gelijk stuf:entiteittype="SWO">\n' + omvatkadaand;
        var gelijkEind: string = omvataand + '    </woz:gelijk>\n';

        var vanafBegin: string = '    <woz:vanaf stuf:entiteittype="SWO">\n' + omvatkadaand;
        var vanafEind: string = omvataand + '    </woz:vanaf>\n';

        var tmBegin: string = '    <woz:totEnMet stuf:entiteittype="SWO">\n' + omvatkadaand;
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
                                ' </bg:kadastraleGemeentecode>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].value +
                                ' </bg:kadastraleGemeentecode>\n';
                        }
                        break;
                    case 1: // kadsectie
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                ' </bg:kadastraleSectie>\n';
                            tm += '                    <bg:kadastraleSectie>' +
                                this.fields[i].maxvalue +
                                ' </bg:kadastraleSectie>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                ' </bg:kadastraleSectie>\n';
                        }

                        break;
                    case 2: // kadperceel
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value + ' </bg:kadastraalPerceelnummer>\n';
                            tm += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].maxvalue + ' </bg:kadastraalPerceelnummer>\n';
                        } else {
                            gelijk += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value +
                                ' </bg:kadastraalPerceelnummer>\n';
                        }
                        break;
                    case 3: // deelperceelNr
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kdp.deelperceelNummer>' +
                                this.fields[i].value +
                                ' </bg:kdp.deelperceelNummer>\n';
                            tm += '                    <bg:kdp.deelperceelNummer>' +
                                this.fields[i].maxvalue +
                                ' </bg:kdp.deelperceelNummer>\n';
                        } else {
                            gelijk += '                    <bg:kdp.deelperceelNummer>' +
                                this.fields[i].value +
                                ' </bg:kdp.deelperceelNummer>\n';
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

    private makeCriteriaKadastraleAanduiding03() {
        var criteria: string;

        var omvatkadaand = '        <woz:omvat stuf:entiteittype="SWOKOZ">\n' +
            '            <woz:gerelateerde stuf:entiteittype="KOZ">\n' +
            '                <bg:kadastraleAanduiding>\n';
        var omvataand = '                </bg:kadastraleAanduiding>\n' +
            '            </woz:gerelateerde>\n' +
            '        </woz:omvat>\n';

        var gelijkBegin: string = '    <woz:gelijk stuf:entiteittype="SWO">\n' + omvatkadaand;
        var gelijkEind: string = omvataand + '    </woz:gelijk>\n';

        var vanafBegin: string = '    <woz:vanaf stuf:entiteittype="SWO">\n' + omvatkadaand;
        var vanafEind: string = omvataand + '    </woz:vanaf>\n';

        var tmBegin: string = '    <woz:totEnMet stuf:entiteittype="SWO">\n' + omvatkadaand;
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
                                ' </bg:kadastraleGemeentecode>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleGemeentecode>' +
                                this.fields[i].value +
                                ' </bg:kadastraleGemeentecode>\n';
                        }
                        break;
                    case 1: // kadsectie
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                ' </bg:kadastraleSectie>\n';
                            tm += '                    <bg:kadastraleSectie>' +
                                this.fields[i].maxvalue +
                                ' </bg:kadastraleSectie>\n';
                        } else {
                            gelijk += '                    <bg:kadastraleSectie>' +
                                this.fields[i].value +
                                ' </bg:kadastraleSectie>\n';
                        }

                        break;
                    case 2: // kadperceel
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value + ' </bg:kadastraalPerceelnummer>\n';
                            tm += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].maxvalue + ' </bg:kadastraalPerceelnummer>\n';
                        } else {
                            gelijk += '                    <bg:kadastraalPerceelnummer>' +
                                this.fields[i].value +
                                ' </bg:kadastraalPerceelnummer>\n';
                        }
                        break;
                    case 3: // deelperceelNr
                        if (this.fields[i].maxvalue && this.fields[i].maxvalue.length > 0) { // vanaf en t/m
                            vanaf += '                    <bg:apr.appartementsIndex>' +
                                this.fields[i].value +
                                ' </bg:apr.appartementsIndex>\n';
                            tm += '                    <bg:apr.appartementsIndex>' +
                                this.fields[i].maxvalue +
                                ' </bg:apr.appartementsIndex>\n';
                        } else {
                            gelijk += '                    <bg:apr.appartementsIndex>' +
                                this.fields[i].value +
                                ' </bg:apr.appartementsIndex>\n';
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
