import DepotRessourcesQuestions from 'questions/infra/depot_ressources_questions';

describe('Le dépot ressource de la situation Questions', function () {
  function creeDepotRessources (reponsesJson) {
    return new DepotRessourcesQuestions({
      wav: () => Promise.resolve(),
      svg: () => Promise.resolve(),
      json: (url) => Promise.resolve(() => reponsesJson[url])
    }, 'http://api.localhost');
  }

  it("il retourne les questions de l'évaluation lorque aucun questionnaire n'est associé a la situation", function () {
    const nomSituation = 'nomSituation';
    const reponsesJson = {
      'urlEvaluation.json': {
        situations: [{
          nom_technique: nomSituation
        }],
        questions: [
          { id: '1' }
        ]
      }
    };

    const depotRessources = creeDepotRessources(reponsesJson);
    depotRessources.chargeEvaluation('urlEvaluation.json', nomSituation);
    return depotRessources.chargement().then(() => {
      expect(depotRessources.questions()).to.eql([
        { id: '1' }
      ]);
    });
  });

  it("lorsque la situation n'est pas dans l'évaluation, retourne les questions", function () {
    const nomSituation = 'nomSituation';
    const reponsesJson = {
      'urlEvaluation.json': {
        situations: [],
        questions: [
          { id: '1' }
        ]
      }
    };
    const depotRessources = creeDepotRessources(reponsesJson);
    depotRessources.chargeEvaluation('urlEvaluation.json', nomSituation);
    return depotRessources.chargement().then(() => {
      expect(depotRessources.questions()).to.eql([
        { id: '1' }
      ]);
    });
  });

  it('lorsque la situation a un questionnaire, charge le questionnaire associé', function () {
    const nomSituation = 'nomSituation';
    const reponsesJson = {
      'urlEvaluation.json': {
        situations: [{
          nom_technique: nomSituation,
          questionnaire_id: 'monIdDeQuestionnaire'
        }]
      },
      'http://api.localhost/api/questionnaires/monIdDeQuestionnaire.json': [
        { id: '1' }
      ]
    };
    const depotRessources = creeDepotRessources(reponsesJson);
    depotRessources.chargeEvaluation('urlEvaluation.json', nomSituation);
    return depotRessources.chargement().then(() => {
      expect(depotRessources.questions()).to.eql([
        { id: '1' }
      ]);
    });
  });

  it("lorsque la situation a un questionnaire de situation et d'entrainement, il les charge", function () {
    const nomSituation = 'nomSituation';
    const reponsesJson = {
      'urlEvaluation.json': {
        situations: [{
          nom_technique: nomSituation,
          questionnaire_id: 'monIdDeQuestionnaire',
          questionnaire_entrainement_id: 'monIdDeQuestionnaireEntrainement'
        }]
      },
      'http://api.localhost/api/questionnaires/monIdDeQuestionnaire.json': [
        { id: '1' }
      ],
      'http://api.localhost/api/questionnaires/monIdDeQuestionnaireEntrainement.json': [
        { id: '2' }
      ]
    };
    const depotRessources = creeDepotRessources(reponsesJson);
    depotRessources.chargeEvaluation('urlEvaluation.json', nomSituation);
    return depotRessources.chargement().then(() => {
      expect(depotRessources.questions()).to.eql([
        { id: '1' }
      ]);
      expect(depotRessources.questionsEntrainement()).to.eql([
        { id: '2' }
      ]);
    });
  });

  it('charge les illustrations du questionnaire', function () {
    const nomSituation = 'nomSituation';
    const reponsesJson = {
      'urlEvaluation.json': {
        situations: [],
        questions: [
          { illustration: 'illustration-url1' },
          { illustration: 'illustration-url2' }
        ]
      }
    };
    const depotRessources = creeDepotRessources(reponsesJson);
    depotRessources.chargeEvaluation('urlEvaluation.json', nomSituation);
    let illustrationsUrls;
    depotRessources.charge = (illustrations) => { illustrationsUrls = illustrations; };
    return depotRessources.chargement().then(() => {
      expect(illustrationsUrls).to.eql(['illustration-url1', 'illustration-url2']);
    });
  });
});
