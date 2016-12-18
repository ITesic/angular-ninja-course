## Ninja Movies

Ninja Movies je aplikacija koja omogućava korisniku da pretražuje bazu poznatih filmova i serija, da vidi osnovne informacije o njima, rejting i glumačku postavu. Korisnik može ocjenjivati filmove, voditi listu za gledanje i praviti svoje liste filmova.

Izrada projekta se sastoji iz dvije faze. Prva obuhvata prikaz, pretragu i filtriranje filmova. Druga faza obuhvata autentikaciju korisnika, kreiranje i vođenje lista i ocjenjivanje filmova.

### Prva faza projekta

* Glavni meni treba da sadrži linkove na listu filmova i listu serija

__Lista__

* Početna stranica je lista najpopularnijih filmova
* Iznad svake liste postoji filter po godini, po žanru i po ključnoj riječi
* Na stranici sa listom filmova/serija postoje linkovi za prikaz najpopularnijih, najbolje ocjenjenih, filmovi/seriji koji se trenutno prikazuju i filmovi/seriji koji su najavljeni
* Svaka stavka u listi ima svoju sliku, naziv, godinu objave i prosječnu ocjenu.

__Jedna stavka (film ili serija)__

* Prikaz jedne stavke ima sledeće informacije:
  * Naslov
  * Sliku
  * Opis
  * Godinu objave
  * Prosječnu ocjenu
  * Dužinu trajanja
  * Spisak žanrova kojim pripada
  * Spisak ključih riječi
  * Spisak glumaca

### Druga faza projekta

* Korisnik može da se registruje i da se loguje
* U prikazu jednog filma ulogovani korisnici imaju mogućnost da ocjene film, da ga snime u omiljene, da ga snime u listu za gledanje ili da ga snime u neku svoju listu
* Korisnik može da otvori svoj profil i da vidi filmove koje je gledao, kao i sve svoje liste
* U glavnom meniju postoji link na sve korisnikove liste filmova.

Dizajn aplikacije je po sopstvenom ukusu, kao i raspored elemenata unutar aplikacije. Važno je  da se sve ključne funkcionalnosti implementiraju.

Za izradu ovog projekta možete koristiti otvoreni API koji nudi [The Movie Database](https://www.themoviedb.org). Osnovne informacije o API-ju mozete pogledati [ovde](https://www.themoviedb.org/documentation/api) a detaljnu dokumentaciju [ovde](https://developers.themoviedb.org/3/getting-started).
