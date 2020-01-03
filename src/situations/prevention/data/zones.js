const scene = {
  largeur: 1008,
  hauteur: 566
};

export function pourcentageX (valeur) {
  return valeur / scene.largeur * 100;
}

export function pourcentageY (valeur) {
  return valeur / scene.hauteur * 100;
}

const configurationEntrainement = { zones: [] };
const configurationNormale = {
  zones: [
    {
      x: pourcentageX(80),
      y: pourcentageY(460),
      r: pourcentageX(80),
      id: 'fuite-camion-citerne'
    },
    {
      x: pourcentageX(450),
      y: pourcentageY(390),
      r: pourcentageX(80),
      id: 'alcool-pelleteuse'
    },
    {
      x: pourcentageX(490),
      y: pourcentageY(250),
      r: pourcentageX(80),
      id: 'peintre'
    },
    {
      x: pourcentageX(750),
      y: pourcentageY(340),
      r: pourcentageX(80),
      id: 'fuite-gaz'
    },
    {
      x: pourcentageX(870),
      y: pourcentageY(420),
      r: pourcentageX(80),
      id: 'trou'
    }
  ]
};

export { configurationEntrainement, configurationNormale };
