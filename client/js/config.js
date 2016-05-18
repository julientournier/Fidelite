angular.module('nibs.config', [])

    .constant('SERVER_URL', null)

    .constant('FB_APP_ID','1618878675020266')

    .constant('STATUS_LABELS', [
        'Cinéphile Débutant',
        'Cinéphile Averti',
        'Cinévore'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Cinéphile Débutant  merci d'avoir choisi les cinémas Gaumont Pathé',
        'Cinéphile Averti  vous faites la différence entre Spielberg et Lucas',
        'Cinévore le 7ème art n'a plus de sécret pour vous'
    ]);
