/* Tehtävä 2.1
Tee ohjelma, joka tallentaa yhden viikon viikonpäivät ja niitä vastaavat työtunnit
taulukkoon. Voit keksiä päiville haluamasi työtunnit, rehellinen pitää kuitenkin olla. */
function tallennaTyotunnit() {
    let tyotunnit = [ 
        { "Ma":8 },
        { "Ti":6 },
        { "Ke":7 },
        { "To":5 },
        { "Pe":7} 
    ];

    return tyotunnit;

}

/* Tehtävä 2.2
Tee tehtävän 2.1 ohjelmaan lisäominaisuus, joka laskee työtuntien keskiarvon
a) for-rakenteen (forEach, for-silmukka tai for of) avulla
b) reduce -funktiolla */
function laskeTyotuntiKAForEach() {

    let tyotunnitTaulukko = tallennaTyotunnit();
    let tyotuntiSumma = 0;

    //ei ilmene syntaksi, millä taulukon objekteihin viittaus tehdään esim. forEach osalta, joten vaikea tehdä tehtävä loppuun
    //tyotuntiSumma = tyotunnitTaulukko.forEach()
    //tyotunnit.forEach
}

/* Tehtävä 2.3
Lisää ohjelmaan 2.2 minimin ja maksimin selvittävä osuus.
a) for-rakenteen (forEach, for-silmukka tai for of) avulla
b) reduce -funktiolla */


/* Tehtävä 2.4
Tee ohjelma, jonka lähtökohtana ovat 12 kuukauden palkkatulot kuukausittain.
Kuukausipalkkaa korotetaan 50 %:lla. Ohjelma luo uuden taulukon, josta löytyvät korotetut
palkat. */
function laskeKKPalkkaKorotus() {

    let kkPalkkaTaulukko = [3000, 2000, 3000, 2000, 2000, 3000, 2000, 3000, 2000, 3000, 2000, 2000];
     
    let korotettuPalkkaTaulukko = [];

    for( let alkioIndex = 0 ; alkioIndex < kkPalkkaTaulukko.length ; alkioIndex++ ) {
        
        //lisätään 50%:lla korotettu palkkataso uuteen tauluun
        korotettuPalkkaTaulukko.push(1,5 * kkPalkkaTaulukko[alkioIndex]);
    }
    
    //for luuppi korvattuna forEach luupilla
    //kkPalkkaTaulukko.forEach((alkio) => {
    //    korotettuPalkkaTaulukko.push(1,5 * alkio);
    //});

    return korotettuPalkkaTaulukko;
}

/* Tehtävä 2.5
Tee ohjelma, jonka lähtökohtana ovat 12 kuukauden bruttopalkat kuukausittain ja
veroprosentti. Ohjelma luo uuden taulukon ja laskee nettotulot vähentäen jokaisen
kuukauden bruttopalkasta verot. */
function laskeNettopalkka() {
    
    //ei oikein aukea, minkälaiseen rakenteeseen nuo bruttopalkat ja veroprosentti pitäisi tallentaa, objektit taulukon alkioina ei
    //oikein toimi tässä, kun avaimena pitäisi olla kuukausiNimi tai jokin merkkijono, ehkä kaksi eri taulukkoa bruttopalkoille ja 
    //veroprosentille, mutta ei oikein aika riitä jumittaa tämän tehtävän kanssa enempää
    /* let bruttoPalkkaVeroProsenttiTaulukko = [
        {2000:(0,15)},
        {1000:(0,10)},
        {1500:(0,13)},
        {2000:(0,15)},
        {1500:(0,13)},
        {2500:(0,22)},
        {3000:(0,25)},
        {3000:(0,23)},
        {3500:(0,25)},
        {3200:(0,22)},
        {3700:(0,27)},
        {3900:(0,29)},
    ]; */

    //let nettoPalkkaTaulukko = [];

    //bruttoPalkkaVeroProsenttiTaulukko.forEach((alkio) => {
    //    nettoPalkkaTaulukko.push(alkio)
    //}
}

/* Tehtävä 2.6
Tee ohjelma, joka järjestää taulukon luvut [1,4,100,2,5,4] suuruusjärjestykseen. Käytä
JavaScriptin sort-funktiota oletustoteutuksella (ei omaa compare-funktiota) */
function jarjestaLuvut() {

    let lukulista = [1,4,100,2,5,4];

    lukulista.sort();
}

/* Tehtävä 2.7
Tee ohjelma, joka järjestää taulukon merkkijonot [“1”,”4”,”100”,”2”,”5”,”4”]
aakkosjärjestykseen. Käytä JavaScriptin sort-funktiota oletustoteutuksella (ei omaa
compare-funktiota) */
function jarjestaMjonot() {

    let merkkijonolista = ["1","4","100","2","5","4"];

    merkkijonolista.sort();

    //sort tuloksena pitäisi olla ["1","100","2","4","4","5"]
}

/* Tehtävä 2.8
Selitä lyhyesti miten miten JavaScriptin sort-funktio toimii ja mitä tarkoittaa parametrina
annettava compare-funktio. */

/* Sort-funktio muuntaa ei-merkkijonot merkkijonoiksi ja vertaa merkki merkiltä niiden suuruutta keskenään ja
suuruusvertailu tehdään merkkikohtaisen UTF-16 arvon mukaisessa suuruusjärjestyksessä. */

/* Compare-funktiolla parametrina voidaan määrittää sortin oletustoteutuksesta poikkeava vertailufunktio alkioille. */

/* Tehtävä 2.9
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa taulukon
objektit on järjestetty arvojen(values) mukaiseen järjestykseen. */
function suuruusJarjesta() {

    let vkPaivaLista = [
        {nimi:"ma", arvo:44},
        {nimi:"pe", arvo:100},
        {nimi:"ke", arvo:21},
        {nimi:"ti", arvo:66},
        {nimi:"la", arvo:22}
    ];

    //järjestetään arvojen mukaiseen suuruusjärjestykseen
    //vt. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sort_stability
    vkPaivaLista.sort((ensimmainen, toinen) => ensimmainen.arvo - toinen.arvo );

}

/* Tehtävä 2.10
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa taulukon
kentät on järjestetty päivien(avaimet) mukaiseen järjestykseen periaatteella
ma<ti<ke<to<pe<la<su. */
function suuruusJarjestaAvainMukaan() {

    let vkPaivaLista = [
        {nimi:"ma", vkpaivaNro:1, arvo:44},
        {nimi:"pe", vkpaivaNro:5, arvo:100},
        {nimi:"ke", vkpaivaNro:3, arvo:21},
        {nimi:"ti", vkpaivaNro:2, arvo:66},
        {nimi:"la", vkpaivaNro:6, arvo:22}
    ];

    //järjestetään vkpaivanro mukaiseen kasvujärjestykseen
    vkPaivaLista.sort((ensimmainen, toinen) => ensimmainen.vkpaivaNro - toinen.vkpaivaNro );
}

/* Tehtävä 2.11
Sinulla on [{“ma”:44}, {“pe”:100}, {“ke”:21}, {“ti”: 66},{”la”:22}]. Luo taulukko, jossa on
mukana objektit, joissa on parillinen arvo. */
function etsiParillisetArvot() {

    let vkPaivaLista = [
        {nimi:"ma", vkpaivaNro:1, arvo:44},
        {nimi:"pe", vkpaivaNro:5, arvo:100},
        {nimi:"ke", vkpaivaNro:3, arvo:21},
        {nimi:"ti", vkpaivaNro:2, arvo:66},
        {nimi:"la", vkpaivaNro:6, arvo:22}
    ];


    //luo taulukon, jossa on vain ne objektit joissa on parillinen arvo
    const tulosLista = vkPaivaLista.filter(arvoKentta => (arvoKentta.arvo % 2) == 0 );
    
    return tulosLista;
}