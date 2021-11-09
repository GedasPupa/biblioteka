interface IKnyga {
  pavadinimas: string;
  autorius: string;
  metai: number;
  paimta: boolean;
}

class Knyga implements IKnyga {
  pavadinimas;
  autorius;
  metai;
  paimta;
  constructor(
    pavadinimas: string,
    autorius: string,
    metai: number,
    paimta: boolean
  ) {
    this.pavadinimas = pavadinimas;
    this.autorius = autorius;
    this.metai = metai;
    this.paimta = paimta;
  }
}

class Biblioteka {
  kolekcija: IKnyga[] = [];

  // 0. Sukurti knygą.
  sukurtiKnyga(pavadinimas: string, autorius: string, metai: number): IKnyga {
    return new Knyga(pavadinimas, autorius, metai, false);
  }

  // 1. Nusipirkti naują knygos kopiją ir ją įdėti į bibliotekos kolekciją.
  nupirktiKnyga(knyga: IKnyga): IKnyga {
    this.kolekcija.push(knyga);
    return knyga;
  }

  // 2. Pasiskolinti knygos kopiją iš bibliotekos. Leidžia pasiimti knygos kopiją, jeigu tokia yra.
  pasiskolintiKnyga(inp: string): IKnyga | string {
    const knyga = this.rastiKnyga(inp, false);
    if (knyga) {
      knyga.paimta = true;
      console.log("Rasta ir pasiskolinta knyga:", knyga);
      return knyga;
    } else {
      console.log("Pagal įvestus kriterijus knyga nerasta.");
      return "Pagal įvestus kriterijus knyga nerasta.";
    }
  }

  // 3. Grąžinti knygos kopiją į biblioteką. Leidžia grąžinti knygos kopiją, kad ji vėl taptu "Pasiekiama".
  grazintiKnyga(inp: string): IKnyga | string {
    const knyga = this.rastiKnyga(inp, true);
    if (knyga) {
      knyga.paimta = false;
      console.log("Rasta ir grązinta knyga:", knyga);
      return knyga;
    } else {
      console.log("Pagal įvestus kriterijus knyga nerasta.");
      return "Pagal įvestus kriterijus knyga nerasta.";
    }
  }

  // 4.  Rasti knygos kopiją (metodas skolinimuisi/grąžinimui)
  rastiKnyga(inp: string, bool: boolean): IKnyga | undefined {
    let knyga = this.kolekcija
      .filter((kn) => kn.paimta === bool)
      .find((el) => el.pavadinimas === inp);
    if (!knyga) {
      knyga = knyga = this.kolekcija
        .filter((kn) => kn.paimta === bool)
        .find((el) => el.autorius === inp);
    }
    return knyga;
  }

  // Rasti "Pasiekiamos" arba "Paimtos" sąrašus pagal pavadinimą/autorių
  rastiKnyguSarasa(inp: string, inp2: boolean): IKnyga[] {
    if (!inp2) {
      // "Pasiekiamos":
      const pasiekiamosPav = this.kolekcija
        .filter((kn) => kn.paimta === false)
        .filter((kn) => kn.pavadinimas === inp) // ieškome pagal pavadinimą
        .sort((a, b) => {
          return a.metai < b.metai ? -1 : 0;
        });
      return pasiekiamosPav.length > 0
        ? pasiekiamosPav
        : this.kolekcija
            .filter((kn) => kn.paimta === false)
            .filter((kn) => kn.autorius === inp) // jeigu neradome, ieškome pagal autorių
            .sort((a, b) => {
              return a.metai < b.metai ? -1 : 0;
            });
    } else {
      // "Paimtos":
      const paimtosPav = this.kolekcija
        .filter((kn) => kn.paimta === true)
        .filter((kn) => kn.pavadinimas === inp)
        .sort((a, b) => {
          return a.metai < b.metai ? -1 : 0;
        });
      return paimtosPav.length > 0
        ? paimtosPav
        : this.kolekcija
            .filter((kn) => kn.paimta === true)
            .filter((kn) => kn.autorius === inp)
            .sort((a, b) => {
              return a.metai < b.metai ? -1 : 0;
            });
    }
  }
}

export { Biblioteka };
