class Knyga {
    constructor(pavadinimas, autorius, metai, paimta) {
        this.pavadinimas = pavadinimas;
        this.autorius = autorius;
        this.metai = metai;
        this.paimta = paimta;
    }
}
class Biblioteka {
    constructor() {
        this.kolekcija = [];
    }
    // 0. Sukurti knygą.
    sukurtiKnyga(pavadinimas, autorius, metai) {
        return new Knyga(pavadinimas, autorius, metai, false);
    }
    // 1. Nusipirkti naują knygos kopiją ir ją įdėti į bibliotekos kolekciją.
    nupirktiKnyga(knyga) {
        this.kolekcija.push(knyga);
    }
    // 2. Pasiskolinti knygos kopiją iš bibliotekos. Leidžia pasiimti knygos kopiją, jeigu tokia yra.
    pasiskolintiKnyga(inp) {
        const knyga = this.rastiKnyga(inp);
        if (knyga) {
            knyga.paimta = true;
            console.log("Rasta ir pasiskolinta knyga:", knyga);
        }
        else {
            console.log("Pagal įvestus kriterijus knyga nerasta.");
        }
    }
    // 3. Grąžinti knygos kopiją į biblioteką. Leidžia grąžinti knygos kopiją, kad ji vėl taptu "Pasiekiama".
    grazintiKnyga(inp) {
        const knyga = this.rastiKnyga(inp);
        if (knyga) {
            knyga.paimta = false;
            console.log("Rasta ir grązinta knyga:", knyga);
        }
        else {
            console.log("Pagal įvestus kriterijus knyga nerasta.");
        }
    }
    // 4.  Rasti knygos kopiją
    rastiKnyga(inp) {
        let knyga = this.kolekcija.find((el) => el.pavadinimas === inp);
        if (!knyga) {
            knyga = knyga = this.kolekcija.find((el) => el.autorius === inp);
        }
        return knyga;
    }
    // Rasti "Pasiekiamos" arba "Paimtos"
    rastiKnyguSarasa(inp, inp2) {
        if (inp2) {
            // "Pasiekiamos"
            return this.kolekcija
                .filter((kn) => kn.paimta !== false)
                .filter((kn) => kn.autorius === inp)
                .sort((a, b) => {
                return a.metai < b.metai ? -1 : 0;
            });
        }
        else {
            // "Paimtos"
            return this.kolekcija
                .filter((kn) => kn.paimta !== true)
                .filter((kn) => kn.autorius === inp)
                .sort((a, b) => {
                return a.metai < b.metai ? -1 : 0;
            });
        }
    }
}
export { Biblioteka };
