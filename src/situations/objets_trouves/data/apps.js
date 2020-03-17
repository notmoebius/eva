import AppAgendaEntrainement from '../assets/app-agenda-entrainement.png';
import AppPhoto from '../assets/app-photo.png';
import AppAgenda from '../assets/app-agenda.png';
import choix1 from 'maintenance/assets/consigne_demarrage.wav';
import AppMessage1 from '../assets/app-message1.png';
import AppMessage2 from '../assets/app-message2.png';
import AppMessage3 from '../assets/app-message3.png';
import entree from '../assets/entree.svg';
import golf from '../assets/golf.svg';
import restaurant from '../assets/restaurant.svg';
import toilettes from '../assets/toilettes.svg';
import zoo from '../assets/zoo.svg';

const questionAgendaEntrainement = {
  id: 'agenda-entrainement',
  illustration: AppAgendaEntrainement,
  intitule: 'Voici le téléphone de Sophie, que faisait Sophie ce matin ?',
  choix: [
    {
      id: '1',
      intitule: 'Elle distribuait le courrier'
    },
    {
      id: '2',
      intitule: "Elle s'occupait du zoo"
    },
    {
      id: '3',
      intitule: 'Elle réalisait un travail administratif'
    },
    {
      id: '4',
      intitule: 'Elle distribuait les colis'
    }
  ]
};

const questionPhoto = {
  id: 'photo',
  illustration: AppPhoto,
  intitule: "Qu'indique le badge de Denis ?",
  choix: [
    {
      id: '1',
      intitule: 'Il travaille dans le zoo'
    },
    {
      id: '2',
      intitule: 'Il déjeune dans le zoo'
    },
    {
      id: '3',
      intitule: "Il doit retrouver quelqu'un dans le zoo"
    },
    {
      id: '4',
      intitule: 'Il doit se déplacer au zoo'
    },
    {
      id: '5',
      intitule: 'Il est perdu dans le zoo'
    }
  ]
};

const questionAgenda = {
  id: 'agenda',
  illustration: AppAgenda,
  intitule: "Où Sophie doit-elle travailler de 14h30 à 16h, d'après son agenda ?",
  choix: [
    {
      id: '1',
      audio: choix1
    },
    {
      id: '2',
      audio: choix1
    },
    {
      id: '3',
      audio: choix1
    },
    {
      id: '4',
      audio: choix1
    },
    {
      id: '5',
      audio: choix1
    },
    {
      id: '6',
      audio: choix1
    }
  ]
};

const questionMessage1 = {
  id: 'message1',
  illustration: AppMessage1,
  intitule: 'A quel bureau Sophie devrait-elle se rendre tout à l’heure ?',
  choix: [
    {
      id: '1',
      intitule: '51'
    },
    {
      id: '2',
      intitule: '61'
    },
    {
      id: '3',
      intitule: '71'
    },
    {
      id: '4',
      intitule: '81'
    },
    {
      id: '5',
      intitule: '91'
    }
  ]
};

const questionMessage2 = {
  id: 'message2',
  illustration: AppMessage2,
  intitule: 'Dans quelle salle de jeu Sophie a-t-elle décidé d’aller ?',
  choix: [
    {
      id: '1',
      intitule: 'salle 1 : capacité 80 personnes, 50€'
    },
    {
      id: '2',
      intitule: 'salle 2 : capacité 90 personnes, 60€'
    },
    {
      id: '3',
      intitule: 'salle 3 : capacité 105 personnes, 100€'
    },
    {
      id: '4',
      intitule: 'salle 4 : capacité 125 personnes, 150€'
    },
    {
      id: '5',
      intitule: 'salle 5 : capacité 15 personnes, 10€'
    }
  ]
};

const questionMessage3 = {
  id: 'message3',
  illustration: AppMessage3,
  intitule: 'Où Sophie devait-elle retrouver Dounia ?',
  choix: [
    {
      id: '1',
      image: restaurant
    },
    {
      id: '2',
      image: entree
    },
    {
      id: '3',
      image: toilettes
    },
    {
      id: '4',
      image: zoo
    },
    {
      id: '5',
      image: golf
    }
  ]
};

const question1 = {
  id: 1,
  choix: [
    {
      id: '1',
      intitule: '1'
    }
  ]
};

const question2 = {
  id: 2,
  choix: [
    {
      id: '2',
      intitule: '2'
    }
  ]
};

const configurationEntrainement = {
  apps: {
    agenda: [questionAgendaEntrainement]
  }
};
const configurationNormale = {
  apps: {
    photos: [questionPhoto],
    repondeur: [question1],
    rappels: [question1],
    agenda: [questionAgenda],
    messages: [questionMessage1, questionMessage2, questionMessage3]
  },
  questionsFin: [question1, question2]
};

export { configurationEntrainement, configurationNormale };
