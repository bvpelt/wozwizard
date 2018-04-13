# WozWizard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Getting started
- Install npm
- Install angular cli global ```npm install -g @angular/cli```
- Download github project in a source directory
- In that source directory npm install to get all needed dependencies
- Start the Development server

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Setup Development project
To setup the project from scratch
```
cd Develop/wozwizard/
npm init -y
npm install webpack webpack-cli webpack-dev-server --save-dev
```
As root
```
npm install -g @angular/cli@latest
```

# Angular
To use angular cli use
```
ng --version
```
create new app
```
ng new "WozWizard"
```

run app
```
ng serve
```

# References
- see https://angular.io/tutorial/toh-pt0 angular tutorial
- see https://webpack.js.org/guides/getting-started/
- see https://angular.io/guide/webpack
- see https://www.tektutorialshub.com/installing-and-getting-started-with-angular-2/
- dropdown box http://www.talkingdotnet.com/bind-select-dropdown-list-in-angular-js-2/
- communication between components https://www.themarketingtechnologist.co/building-nested-components-in-angular-2/
- show/hide http://www.encodedna.com/angular/how-to-show-hide-or-toggle-elements-in-angular-4.htm

# Sorteringen


SWO:
```
Sortering 1: wozObjectNummer
Sortering 2: omvat/gerelateerde/kadastraleIdentificatie
Sortering 3: omvat/gerelateerde/kadastraleAanduiding/kadastraleGemeenteCode, omvat/gerelateerde/kadastraleAanduiding/kadastraleSectie, omvat/gerelateerde/kadastraleAanduiding/perceelnummer
Sortering 4: omvat/gerelateerde/kadastraleAanduiding/kadastraleGemeenteCode, omvat/gerelateerde/kadastraleAanduiding/kadastraleSectie, omvat/gerelateerde/kadastraleAanduiding/perceelnummer
Sortering 5: omvat/gerelateerde/kadastraleAanduiding/kadastraleGemeenteCode, omvat/gerelateerde/kadastraleAanduiding/kadastraleSectie, omvat/gerelateerde/kadastraleAanduiding/perceelnummer, omvat/gerelateerde/kadastraleAanduiding/deelperceelnummer
Sortering 6: omvat/gerelateerde/kadastraleAanduiding/kadastraleGemeenteCode, omvat/gerelateerde/kadastraleAanduiding/kadastraleSectie, omvat/gerelateerde/kadastraleAanduiding/perceelnummer, omvat/gerelateerde/kadastraleAanduiding/appartementsindex
Sortering 7: ligtIn/gerelateerde/betrokkenWaterschap
Bij de sortering 4, 5 en 6 dienen uitsluitend gehele percelen, deelpercelen c.q. appartementsrechten in de sortering te worden opgenomen. Bij sortering 3 worden alle kadastrale onroerende zaken in de sortering opgenomen.
```
```javascript
SWOSort {
       [
        { “sortering”: “1”, [“wozObjectNummer”]},
        { “sortering”: “2”, [“kadastraleIdentificatie”]},
        { “sortering”: “3”, [“kadastraleGemeenteCode”, “kadastraleSectie”, “perceelnummer” ]},
        { “sortering”: “4”, [“kadastraleGemeenteCode”, “kadastraleSectie”, “perceelnummer” ]},
        { “sortering”: “5”, [“kadastraleGemeenteCode”, “kadastraleSectie”, “perceelnummer”, “deelperceelnummer” ]},
        { “sortering”: “6”, [“kadastraleGemeenteCode”, “kadastraleSectie”, “perceelnummer”, “appartementsindex” ]},
        { “sortering”: “7”, [“betrokkenWaterschap” ]}
]
}
```

WOZ:
```
Sortering 1: wozObjectNummer
Sortering 2: ontleentAanduidingAan/gerelateerde/identificatie
Sortering 3: aanduidingWOZobject/aoa.identificatie
Sortering 4: aanduidingWOZobject/aoa.postcode, aanduidingWOZobject/aoa.huisnummer, aanduidingWOZobject/aoa.huisletter, aanduidingWOZobject/aoa.huisnummertoevoeging
Sortering 5: aanduidingWOZobject/wpl.woonplaatsNaam, aanduidingWOZobject/gor.openbareRuimteNaam, aanduidingWOZobject/aoa.huisnummer, aanduidingWOZobject/aoa.huisletter, aanduidingWOZobject/aoa.huisnummertoevoeging
Sortering 6: aanduidingWOZobject/wpl.woonplaatsNaam, aanduidingWOZobject/gor.openbareRuimteNaam, aanduidingWOZobject/locatieOmschrijving
Sortering 7: bevatKadastraleObjecten/gerelateerde/kadastraleIdentificatie
Sortering 8: bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraleGemeentecode, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraleSectie, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraalPerceelnummer  (NB: bij keuze voor deze sortering mogen alle soorten kadastrale onroerende zaken worden meegegeven)
Sortering 9: bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraleGemeentecode, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraleSectie, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraalPerceelnummer  (NB: bij keuze voor deze sortering mogen alleen kadastrale onroerende zaken zonder deelperceelnummer en appartementsindex worden meegenomen)
Sortering 10: bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraleGemeentecode, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraleSectie, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraalPerceelnummer, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kdp.deelperceelNummer  (NB: bij keuze voor deze sortering mogen alleen kadastrale onroerende zaken met deelperceelnummer worden meegenomen)
Sortering 11: bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraleGemeentecode, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraleSectie, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/kadastraalPerceelnummer, bevatKadastraleObjecten/gerelateerde/kadastraleAanduiding/apr.appartementsindex  (NB: bij keuze voor deze sortering mogen alleen kadastrale onroerende zaken met appartementsindex worden meegenomen)
Sortering 12: heeftBelanghebbende/gerelateerde/bsVesNummerOfId, heeftBelanghebbende/aanduidingEigenaarGebruiker, wozObjectnummer
Sortering 13: heeftBelanghebbende/gerelateerde/naam, heeftBelanghebbende/aanduidingEigenaarGebruiker, wozObjectnummer
Sortering 14: heeftBelanghebbende/gerelateerde/adresNederland/postcode, heeftBelanghebbende/gerelateerde/adresNederland/huisnummer, heeftBelanghebbende/gerelateerde/adresNederland/huisletter, heeftBelanghebbende/gerelateerde/adresNederland/huisnummertoevoeging, heeftBelanghebbende/aanduidingEigenaarGebruiker, wozObjectnummer
Sortering 15: heeftBelanghebbende/gerelateerde/adresNederland/postcode, heeftBelanghebbende/gerelateerde/adresNederland/postadresnummer, heeftBelanghebbende/aanduidingEigenaarGebruiker, wozObjectnummer
Sortering 16: heeftBelanghebbende/gerelateerde/adresBuitenland/landnaam, heeftBelanghebbende/gerelateerde/adresBuitenland/sub.adresBuitenland1, heeftBelanghebbende/gerelateerde/adresBuitenland/sub.adresBuitenland2, heeftBelanghebbende/gerelateerde/adresBuitenland/sub.adresBuitenland3, heeftBelanghebbende/aanduidingEigenaarGebruiker, wozObjectnummer
Sortering 17: heeftBelanghebbende/gerelateerde/adresBuitenland/landcode, heeftBelanghebbende/gerelateerde/adresBuitenland/sub.adresBuitenland1, heeftBelanghebbende/gerelateerde/adresBuitenland/sub.adresBuitenland2, heeftBelanghebbende/gerelateerde/adresBuitenland/sub.adresBuitenland3, heeftBelanghebbende/aanduidingEigenaarGebruiker, wozObjectnummer
Sortering 18: gebruikscode, aanduidingWOZObject/wpl.woonplaatsnaam, aanduidingWOZObject/gor.openbareruimteNaam, aanduidingWOZObject/aoa.huisnummer, aanduidingWOZobject/aoa.huisletter, aanduidingWOZobject/aoa.huisnummertoevoeging
Sortering 20: heeftSluimerendObject/gerelateerde/wozObjectnummer, wozObjectnummer
Sortering 24: isVerbondenMet/gerelateerde/identificatie
Sortering 25: heeftPand/gerelateerde/identificatie
Sortering 26: heeffAlsAanduiding/gerelateerde/identificatie
Sortering 27: verantwoordelijkeGemeente/gemeenteCode
Sortering 28: ligtIn/gerelateerde/betrokkenWaterschap
```
```javascript
WOZSort {
       [
        { “sortering”:  “1”, [“wozObjectNummer”]},
        { “sortering”:  “2”, [“identificatie”]},
        { “sortering”:  “3”, [“aoa.identificatie” ]},
        { “sortering”:  “4”, [“aoa.postcode”,           “aoa.huisnummer”,              “aoa.huisletter”,              “aoa.huisnummertoevoeging” ]},
        { “sortering”:  “5”, [“wpl.woonplaatsNaam”,     “gor.openbareRuimteNaam”,      “aoa.huisnummer”,              “aoa.huisletter”,          “aoa.huisnummertoevoeging” ]},
        { “sortering”:  “6”, [“wpl.woonplaatsNaam”,     “gor.openbareRuimteNaam”,      “locatieOmschrijving”]},
        { “sortering”:  “7”, [“kadastraleIdentificatie” ]},
        { “sortering”:  “8”, [“kadastraleGemeenteCode”, “kadastraleSectie”,            “perceelnummer” ]},
        { “sortering”:  “9”, [“kadastraleGemeenteCode”, “kadastraleSectie”,            “perceelnummer” ]},
        { “sortering”: “10”, [“kadastraleGemeenteCode”, “kadastraleSectie”,            “perceelnummer”,               “kdp.deelperceelNummer” ]},
        { “sortering”: “11”, [“kadastraleGemeenteCode”, “kadastraleSectie”,            “perceelnummer”,               “apr.appartementsindex” ]},
        { “sortering”: “12”, [“bsVesNummerOfId”,        “aanduidingEigenaarGebruiker”, “wozObjectnummer” ]},
        { “sortering”: “13”, [“naam”,                   “aanduidingEigenaarGebruiker”, “wozObjectnummer” ]},
        { “sortering”: “14”, [“postcode”,               “huisnummer”,                  “huisletter”,                  “huisnummertoevoeging”,    “aanduidingEigenaarGebruiker”, “wozObjectnummer” ]},
        { “sortering”: “15”, [“postcode”,               “postadresnummer”,             “aanduidingEigenaarGebruiker”, “wozObjectnummer” ]},
        { “sortering”: “16”, [“landnaam”,               “sub.adresBuitenland1”,        “sub.adresBuitenland2”,        “sub.adresBuitenland3”,    “aanduidingEigenaarGebruiker”, “wozObjectnummer” ]},
        { “sortering”: “17”, [“landcode”,               “sub.adresBuitenland1”,        “sub.adresBuitenland2”,        “sub.adresBuitenland3”,    “aanduidingEigenaarGebruiker”, “wozObjectnummer” ]},
        { “sortering”: “18”, [“gebruikscode”,           “wpl.woonplaatsnaam”,          “gor.openbareruimteNaam”,      “aoa.huisnummer”,          “aoa.huisletter”,              “aoa.huisnummertoevoeging” ]},
        { “sortering”: “20”, [“wozObjectnummer”,        “wozObjectnummer” ]},
        { “sortering”: “24”, [“identificatie” ]},
        { “sortering”: “25”, [“identificatie” ]},
        { “sortering”: “26”, [“identificatie” ]},
        { “sortering”: “27”, [“gemeenteCode” ]},
        { “sortering”: “28”, [“betrokkenWaterschap” ]}
]
}
```

WRD:
```
Sortering 1: isVoor/gerelateerde/wozObjectnummer, waardepeildatum (DESC), toestandspeildatum (DESC)
Sortering 2: isVoor/gerelateerde/aanduidingWOZObject/aoa.postcode, isVoor/gerelateerde/aanduidingWOZObject/aoa.huisnummer, aanduidingWOZobject/huisnummerletter, aanduidingWOZobject/huisnummertoevoeging, waardepeildatum (DESC), toestandspeildatum (DESC)
Sortering 3: isVoor/gerelateerde/aanduidingWOZObject/wpl.woonplaatsnaam, isVoor/gerelateerde/aanduidingWOZObject/gor.openbareruimteNaam, isVoor/gerelateerde/aanduidingWOZObject/aoa.huisnummer, aanduidingWOZobject/aoa.huisnummerletter, aanduidingWOZobject/aoa.huisnummertoevoeging, waardepeildatum (DESC), toestandspeildatum (DESC)
Sortering 4: isVoor/gerelateerde/aanduidingWOZObject/wpl.woonplaatsnaam, isVoor/gerelateerde/aanduidingWOZObject/locatieOmschrijving, isVoor/gerelateerde/aanduidingWOZObject/gor.openbareruimtenaam, isVoor/gerelateerde/aanduidingWOZObject/aoa.huisnummer, aanduidingWOZobject/aoa.huisletter, aanduidingWOZobject/aoa.huisnummertoevoeging, waardepeildatum (DESC), toestandspeildatum (DESC)
Sortering 5: isVoor/gerelateerde/verantwoordelijkeGemeente/gemeenteCode
Sortering 6: isVoor/gerelateerde/ligtIn/gerelateerde/betrokkenWaterschap
```

```javascript
WRDSort {
       [
        { “sortering”: “1”, [“wozObjectNummer”,    “waardepeildatum”,        “toestandspeildatum” ]},
        { “sortering”: “2”, [“aoa.postcode”,       “aoa.huisnummer”,         “huisnummerletter”,       “huisnummertoevoeging”, “waardepeildatum”,          “toestandspeildatum” ]},
        { “sortering”: “3”, [“wpl.woonplaatsnaam”, “gor.openbareruimteNaam”, “aoa.huisnummer”,         “aoa.huisnummerletter”, “aoa.huisnummertoevoeging”, “waardepeildatum”,          “toestandspeildatum” ]},
        { “sortering”: “4”, [“wpl.woonplaatsnaam”, “locatieOmschrijving”,    “gor.openbareruimtenaam”, “aoa.huisnummer”,       “aoa.huisletter”,           “aoa.huisnummertoevoeging”, “waardepeildatum”, “toestandspeildatum” ]},
        { “sortering”: “5”, [“gemeenteCode” ]},
        { “sortering”: “6”, [“betrokkenWaterschap” ]}
]
}
```



