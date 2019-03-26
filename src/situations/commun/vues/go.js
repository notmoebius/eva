import 'commun/styles/go.scss';
import go from 'commun/assets/go.svg';
import play from 'commun/assets/play.svg';

export class VueGo {
  constructor (vueConsigne, journal) {
    this.vueConsigne = vueConsigne;
    this.journal = journal;
  }

  affiche (pointInsertion, $) {
    this.overlay = $('<div id="overlay-go" class="overlay"></div>');

    this.boutonGo = $('<div id="go" class="invisible bouton-centre bouton-lire-consigne-demarrage"></div>');
    this.boutonGo.append(`<img src='${go}'>`);


    this.boutonGo.on('click', () => {
      this.overlay.addClass('invisible');
      this.journal.enregistreDemarrage();
    });
    this.overlay.append(this.boutonGo);

    this.boutonDemarrerConsigne = $('<div id="demarrer-consigne" class="bouton-centre bouton-lire-consigne-demarrage"></div>');
    this.boutonDemarrerConsigne.append(`<img src='${play}'>`);

    this.boutonDemarrerConsigne.on('click', () => {
      this.boutonDemarrerConsigne.addClass('invisible');
      this.vueConsigne.jouerConsigneDemarrage(() => {
        this.boutonGo.removeClass('invisible');
      });
    });

    this.overlay.append(this.boutonDemarrerConsigne);
    $(pointInsertion).append(this.overlay);
  }
}
