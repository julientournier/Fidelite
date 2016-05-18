angular.module('nibs.config', [])

    .constant('SERVER_URL', null)

    .constant('FB_APP_ID','1618878675020266')

    .constant('STATUS_LABELS', [
        'Cinéphile Débutant',
        'Cinéphile Averti',
        'Cinévore'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Cinéphile Débutant: Vous découvrez l'univers des Cinéma Gaumont Pathé.',
        'Cinéphile Averti: vous connaissez la différence entre Spielberg et Lucas',
        'Cinévore: l'univers du cinéma n'a plus de secret pour vous!'
    ]);
