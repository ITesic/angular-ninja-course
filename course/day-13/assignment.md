## Zadatak 9.

Potrebno je ukloniti klijentsku validaciju sa svih formi.
Sve greske koje serverska validacija vrati potrebno je uhvatiti i prikzati.

Validacija koja postoji na serveru:

* Contact
  * firstName: obavezno polje, ne moze biti krace od 2 i duze od 20 karaktera
  * lastName: obavezno polje, ne moze biti krace od 2 i duze od 20 karaktera
  * email: mora biti u odgovarajucem formatu
* Group
  * name: obavezno polje, ne moze biti duze od 10 karaktera

Sve greske je potrebno ispisati u alertima iznad forme i ispod odgovarajuceg inputa.
