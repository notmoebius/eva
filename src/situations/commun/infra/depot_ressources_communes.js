import DepotRessources from 'commun/infra/depot_ressources';
import casque from 'commun/assets/casque.svg';
import sonConsigneCommune from 'commun/assets/consigne_commune.wav';
import sonConsigneBlanche from 'commun/assets/consigne_blanche.wav';

export default class DepotRessourcesCommunes extends DepotRessources {
  constructor (chargeurs, sonConsigneDemarrage, sonConsigneTransition = sonConsigneBlanche) {
    super(chargeurs);
    this.charge([sonConsigneCommune, sonConsigneDemarrage, sonConsigneTransition, casque]);
    this.sonConsigneDemarrage = sonConsigneDemarrage;
    this.sonConsigneTransition = sonConsigneTransition;
  }

  consigneDemarrage () {
    return this.ressource(this.sonConsigneDemarrage);
  }

  consigneTransition () {
    return this.ressource(this.sonConsigneTransition);
  }

  consigneCommune () {
    return this.ressource(sonConsigneCommune);
  }

  casque () {
    return this.ressource(casque);
  }
}
