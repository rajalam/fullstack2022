/* Tehtävä 1.1

© Ideal Learning Ltd 2018, All Rights Reserved
Tee funktio, joka saa parametrina kokonaisluvun. Jos luku on suurempi kuin 100, funktio
palauttaa: ”syötit luvun, joka on suurempi kuin 100”. Jos luku on 100 tai pienempi,
palautetaan “” */
function onkoYli100(syoteLuku) {
    if (syoteLuku > 100) {
        return "syötit luvun, joka on suurempi kuin 100";
    }
    else {
        return "";
    }
}

/* Tehtävä 1.2 
Muuta tehtävää 1 siten, että se palauttaa ”syötit luvun joka on pienempi kuin 100”
tapauksessa, jossa käyttäjä argumentin arvo on pienempi kuin sata. */
function onkoAlle100(syoteLuku) {
    if (syoteLuku < 100) {
        return "syötit luvun, joka on pienempi kuin 100";
    }
    else {
        return "";
    }
}

/* Tehtävä 1.3
Muuta tehtävää 2 siten, että funktio palauttaa tekstin ”luku on 100” jos käyttäjä syöttää
luvun 100. */
function onkoTasan100(syoteLuku) {
    if (syoteLuku == 100) {
        return "luku on 100";
    }
    else {
        return "";
    }
}

/* Tehtävä 1.4
a) Tee funktio, jonka parametreina ovat tunnit, minuutit ja sekunnit ja se palauttaa
kokonaisajan sekunteina. Esimerkiksi, jos argumenteiksi annetaan 0 tunneiksi, 1
minuuteiksi 1 ja 1 sekunneiksi, palauttaa funktio 61 sekuntia.
Kokeile ohjelmaasi myös seuraavalla syötteellä: tunnit=20, minuutit=2 ja sekunnit=300.
Jos ohjelmasi ei toimi, korjaa se.
c) Tee funktio, jonka parametrina on valuutan määrä euroissa ja se palauttaa määrän
markoissa. */

//a)
function aikaSekunteina(tunnit, minuutit, sekunnit) {

    //muunnetaan sekunneiksi tunnit, minuutit ja sekunnit ja yhteenlasku
    let tulosSek = tunnit * 60 * 60 + minuutit * 60 + sekunnit;
    return tulosSek;
}

//aikaSekunteina(0, 1, 1)
//console.log(aikaSekunteina(0,1,1))
//aikaSekunteina(20, 2, 300)

//b) Tee funktio, jonka parametrina on valuutan määrä markoissa ja se palauttaa määrän
//euroissa.
function muunnaEuroiksi(markkaa) {

    //muunnetaan markoiksi eurot
    let tulosEur = (markkaa / 5, 94573);
    return tulosEur;
}

/* c) Tee funktio, jonka parametrina on valuutan määrä euroissa ja se palauttaa määrän
markoissa. */
function muunnaMarkoiksi(euroa) {

    //muunnetaan markat euroiksi
    let tulosMarkka = (euroa * 5, 94573);
    return tulosMarkka;
}

/* Tehtävä 1.5
Tee funktio, jonka parametrit ovat viikonpäivän numeron ja joka palauttaa viikonpäivän,
esim. jos argumentti on 1, palautetaan “maanantai”. */
function annaViikonpaiva(vkPaivaNumero) {
    switch (vkPaivaNumero) {

        case 1:
            return "maanantai"
        case 2:
            return "tiistai"
        case 3:
            return "keskiviikko"
        case 4:
            return "torstai"
        case 5:
            return "perjantai"
        case 6:
            return "lauantai"
        case 7:
            return "sunnuntai"
        default:
            return "ei ole viikonpaiva"

    }
}

/* Tehtävä 1.6
Tee funktio, joka saa syötteenä iän ja palauttaa seuraavat tekstit riippuen iästä:

1-17 “olet alaikäinen”
18-33 “olet nuori”
34-50 “olet keski-ikäinen”
51- “olet vanha” */
function arvioiIkakausi(ika) {

    //1-17v
    if (ika > 0 && ika < 18) {
        return "olet alaikäinen"
    }
    else if (ika >= 18 && ika < 34) { //18-33v    
        return "olet nuori"
    }
    else if (ika >= 34 && ika < 51) { //34-50v
        return "olet keski-ikäinen"
    }
    else if (ika >= 51) { //yli 51v
        return "olet vanha"
    }
    else { //joku väärä ikäväli
        return "virheellinen ikä"
    }

}

/* Tehtävä 1.7
Tee funktio, joka saa syötteenä etunimen, sukunimen ja iän. Funktio palauttaa
merkkijonon muodossa ”Terve etunimi sukunimi, olet ikä vuotias”. */
function nimiJaIkaTervehdys(etunimi, sukunimi, ika) {
    return "Terve " + etunimi + " " + sukunimi + ", olet " + ika + " vuotias";
}

/* Tehtävä 1.8
Tee funktio, joka saa syötteenä syntymävuoden ja suosikkinumeron. Jos syntymävuosi on
1970 ja suosikkinumero 77, niin palautetaan teksti: ”Olet onnenpekka”. Tee tehtävä
yhdellä JOS (IF) lauseella. */
function oletkoOnnenpekka(syntymavuosi, suosikkinumero) {
    if (syntymavuosi == 1970 && suosikkinumero == 77) {
        return "Olet onnenpekka";
    }
    //else et ole onnenpekka
    return ""
}

/* Tehtävä 1.9
Tee funktio, joka palauttaa luvut 7-131 (lista/taulukko) */
function annaLukulista() {
    let tulosLista = [];

    for (lukuIndex = 7; lukuIndex < 132; lukuIndex++) {

        //lisätään luvut 7..131 listaan
        tulosLista.push(lukuIndex);
    }
    return tulosLista;
}

/* Tehtävä 1.10
a) Tee funktio, joka palauttaa lukujen 7-131 summan.
b) Tee funktio, joka saa syötteenä positiiviset luvut a ja b ja palauttaa lukuvälin summan.
Huomaa, että ohjelman tulee tarkistaa, että b&gt;a.
Tee molemmat tehtävät käyttäen sekä for-rakennetta että reduce-funktiota. */

//a) Tee funktio, joka palauttaa lukujen 7-131 summan.
function lukuSummaFor() {

    //haetaan luvut 7..131 taulukkoon
    let lukuLista = annaLukulista();
    let lukuSumma = 0;

    for (lukuIndex = 0; lukuIndex < lukuLista.length; lukuIndex++) { //läpikäydään lukulistan kaikki luvut
        lukuSumma = lukuSumma + lukuLista[lukuIndex];
    }
    return lukuSumma;
}

function lukuSummaReduce() {

    //haetaan luvut 7..131 taulukkoon
    let lukuLista = annaLukulista();

    let lukuSumma = 0;
    const alkuArvo = 0

    lukuSumma = lukuLista.reduce(
        (edellinenArvo, nykyArvo) => edellinenArvo + nykyArvo,
        alkuArvo

    );

    return lukuSumma;
}

/*b) Tee funktio, joka saa syötteenä positiiviset luvut a ja b ja palauttaa lukuvälin summan.
Huomaa, että ohjelman tulee tarkistaa, että b > a.
Tee molemmat tehtävät käyttäen sekä for-rakennetta että reduce-funktiota. */
function lukuvaliSummaFor(lukuA, lukuB) {

    let lukuSumma = 0;

    //tarkistetaan että b > a ja että a ja b positiivisia lukuja
    if (lukuB > lukuA && lukuA > 0 && lukuB > 0) {

        for (; lukuA <= lukuB; lukuA++) {
            //läpikäydään a..b luvut ja lasketaan yhteen kumulatiivisesti
            lukuSumma = lukuSumma + lukuA;
        }
        return lukuSumma;
    }
    return "virhesyöte: lukuA täytyy olla suurempi kuin lukuB ja molemmat positiivisia lukuja";
}

function lukuvaliSummaReduce(lukuA, lukuB) {

    let lukuSumma = 0;

    let lukuLista = [];
    const alkuArvo = 0;

    //tarkistetaan että b > a ja että a ja b positiivisia lukuja
    if (lukuB > lukuA && lukuA > 0 && lukuB > 0) {

        while (lukuA <= lukuB) {

            //lisätään luvut a..b listaan
            lukuLista.push(lukuA);
            lukuA++;
        }

        //yhteenlasketaan listan luvut
        lukuSumma = lukuLista.reduce(
            (edellinenArvo, nykyArvo) => edellinenArvo + nykyArvo,
            alkuArvo
        );

        return lukuSumma;
    }
    return "virhesyöte: lukuA täytyy olla suurempi kuin lukuB ja molemmat positiivisia lukuja";
}

/* Tehtävä 1.12
Tee funktio, joka palauttaa parilliset luvut väliltä 0-100.
Tee tehtävä käyttäen for-rakennetta tai reduce-funktiota. */
function annaParillisetLuvutFor() {

    let tulosLista = [];

    lukuValiMax = 100;

    for (lukuIndex = 0; lukuIndex <= lukuValiMax; lukuIndex++) {

        //lisätään parillinen luku tuloslistalle
        if ((lukuIndex % 2) == 0) {
            tulosLista.push(lukuIndex);
        }

    }
    return tulosLista;
}

/* Tehtävä 1.13
Tee funktio, joka palauttaa parillisten kulujen summan lukuväliltä 0-1000.
Tee tehtävä käyttäen joko for-rakennetta tai reduce-funktiota. */
function annaParillistenSummaFor() {

    let summa = 0;

    const lukuValiMax = 1000;

    for (lukuIndex = 0; lukuIndex <= lukuValiMax; lukuIndex++) {

        //lisätään parillinen luku summaan
        if ((lukuIndex % 2) == 0) {
            summa = summa + lukuIndex;
        }

    }
    return summa;
}

/* Tehtävä 1.16
Tee funktio, joka saa syötteenä painon (kg), pituuden (m) ja palauttaa painoindeksin.
Painoindeksin avulla voidaan arvioida painoa. Painoindeksi (BMI = Body Mass Index)
suhteuttaa painon ja pituuden, ja se voidaan laskea jakamalla paino pituuden neliöllä
(laskukaavassa paino ilmaistaan kiloina, pituus metreinä).
Aikuisilla painoindeksin normaalialue on 20.0-24.9. Joskus tästä painoindeksin
normaalialueesta käytetään käsitettä &quot;ihannepaino&quot;. Mitä suurempi painoindeksi on, sitä
suurempaan ylipainoon se viittaa */
function annaPainoIndeksi(paino, pituus) {

    let painoIndeksi = 0.0;

    if (pituus > 0 && pituus < 3 && paino > 0) {

        //pituuden neliö jaettuna painolla
        painoIndeksi = (pituus * pituus) / paino;

    }

    return painoIndeksi;
}

/* Tehtävä 1.17
Kirjoita funktio, joka saa syötteenä vuosiluvun ja palauttaa merkkijonon “on” tai “ei” sen
mukaan onko vuosi karkausvuosi.
Karkausvuosia ovat pääsääntöisesti 4:llä jaolliset vuosiluvut. Vuosi ei kuitenkaan ole
karkausvuosi, jos vuosiluku on jaollinen 100:lla. Mutta, jos vuosiluku on jaollinen 400:lla,
vuosi on aina karkausvuosi.
Ohje: Vuodet 1996 ja 2000 ovat karkausvuosia, vuodet 1800 ja 1997 eivät.
Jakojäännösoperaattori on %. */
function onkoKarkausvuosi(vuosiluku) {
    if( vuosiluku >= 0 ) {
        
        if( ( vuosiluku % 4 ) == 0 ) { //4:llä jaolliset vuosiluvut
            
            if( ( vuosiluku % 400 ) == 0 ) { //400:llä jaolliset vuodet ->karkausvuosi
                return "on";
            }
            else if( ( vuosiluku % 100 ) == 0 ) { //100:llä jaolliset vuodet -> ei karkausvuosi
                return "ei";
            }
            else { //4:llä jaolliset luvut, jotka ei ole 400:llä eikä 100 jaollisia
                return "on";
            }
 
        }
        else { //ei-karkausvuodet
                        
            return "ei";
        }

    }
    //negatiiviset luvut tai virhesyöte
    return "ei";
}

/* Tehtävä 1.18
Tee funktio, joka saa syötteenä luvun. Mikäli syöte ei ole 1 funktio palauttaa ” Syöte ei ole
1” . */
function onkoYksi(luku) {
    if( luku != 1 ) {
        return "Syöte ei ole yksi";
    }

    //else
    return "";
}