import { contenants, contenus } from 'inventaire/data/stock.js';
import { creeMagasin } from 'inventaire/modeles/magasin.js';
import { VueEtageres } from 'inventaire/vues/etageres.js';
import { afficheCorrection, initialiseFormulaireSaisieInventaire } from 'inventaire/vues/formulaireSaisieInventaire.js';

export class VueSituation {
  constructor (journal) {
    this.journal = journal;
  }

  affiche (pointInsertion, $) {
    const magasin = creeMagasin({ contenants, contenus });
    new VueEtageres(pointInsertion, this.journal).affiche(magasin.contenants());

    initialiseFormulaireSaisieInventaire(magasin, pointInsertion, $, (resultatValidation, reponses) => {
      const toutCorrect = Array.from(resultatValidation.values()).every(v => v);
      const message = toutCorrect ? 'Bravo, vous avez réussi !' : 'Ce n\'est pas tout à fait ça… réessayez.';

      this.journal.enregistreSaisieInventaire(toutCorrect, reponses);

      Array.from(resultatValidation).forEach((correction) => { afficheCorrection(correction, $); });
      window.alert(message);
    }, this.journal);
  }
}