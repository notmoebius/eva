import DepotRessourcesCommunes from 'commun/infra/depot_ressources_communes';
import sonConsigneDemarrage from 'maintenance/assets/consigne_demarrage.wav';
import fondSituation from '../assets/fond-situation.png';
import appPhoto from '../assets/app-photo.png';

export default class DepotRessourcesObjetsTrouves extends DepotRessourcesCommunes {
  constructor (chargeurs) {
    super(chargeurs, sonConsigneDemarrage, fondSituation);
    this.charge([appPhoto]);
  }

  fondSituation () {
    return this.ressource(fondSituation);
  }
}
