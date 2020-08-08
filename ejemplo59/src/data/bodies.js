const images = require.context('../assets/body-parts', true, /\.png$/);

export const bodies = {
    heads: [
        {
            id: 1,
            name: 'Cersei Lannister',
            src: images('./a1.png'),
            type: 'heads',
            apiId: 238,
            quotes: [
                "When you play the game of thrones, you win or you die.",
                "If you ever call me sister again, I'll have you strangled in your sleep.",
            ]
        },
        {
            id: 2,
            name: 'Jaime Lannister',
            src: images('./b1.png'),
            type: 'heads',
            apiId: 529,
            quotes: [
                "The things I do for love.",
                "By what right does the wolf judge the lion?",
            ]
        },
        {
            id: 3,
            name: 'Tyrion Lannister',
            src: images('./c1.png'),
            type: 'heads',
            apiId: 1052,
            quotes: [
                "I have a tender spot in my heart for cripples, bastards and broken things.",
                "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
                "That's what I do: I drink and I know things.",
                "The powerful have always preyed on the powerless. That’s how they became powerful in the first place.",
                "It's not easy being drunk all the time. If it were easy, everyone would do it.",
            ]
        },
        {
            id: 4,
            name: 'Sansa Stark',
            src: images('./d1.png'),
            type: 'heads',
            apiId: 957,
            quotes: [
                "Thank you for your many lessons Lord Baelish. I will never forget them.",
                "My skin has turned to porcelain, to ivory, to steel."
            ]
        },
        {
            id: 5,
            name: 'Jon Snow',
            src: images('./e1.png'),
            type: 'heads',
            apiId: 583,
            quotes: [
                "Winter is coming.",
                "If I fall, don't bring me back.",
                "The White Walkers don't care if a man's free folk or crow. We're all the same to them, meat for their army.",
                "The Long Night is coming, and the dead come with it.",
            ]
        },
        {
            id: 6,
            name: 'Daenerys Targaryen',
            src: images('./h1.png'),
            type: 'heads',
            apiId: 271,
            quotes: [
                "I am the dragon's daughter, and I swear to you that those who would harm you will die screaming.",
                "Lannister, Targaryen, Baratheon, Stark, Tyrell... they're all just spokes on a wheel. This one's on top, then that one's on top, and on and on it spins, crushing those on the ground.",
                "All men must die, but we are not men.",
                "Dracarys.",
                "I am no ordinary woman. My dreams come true.",
            ]
        },
        {
            id: 7,
            name: 'Arya Stark',
            src: images('./j1.png'),
            type: 'heads',
            apiId: 148,
            quotes: [
                "Leave one wolf alive and the sheep are never safe.",
                "A girl is Arya Stark of Winterfell. And I'm going home.",
                "Nothing isn’t better or worse than anything. Nothing is just nothing.",
            ]
        },
        {
            id: 8,
            name: 'White Walker',
            src: images('./f1.png'),
            type: 'heads',
            apiId: null,
            quotes: [],
        },
    ],
    middles: [
        {
            id: 1,
            name: 'Cersei Lannister',
            src: images('./a2.png'),
            type: 'middles',
        },
        {
            id: 2,
            name: 'Jaime Lannister',
            src: images('./b2.png'),
            type: 'middles',
        },
        {
            id: 3,
            name: 'Tyrion Lannister',
            src: images('./c2.png'),
            type: 'middles',
        },
        {
            id: 4,
            name: 'Sansa Stark',
            src: images('./d2.png'),
            type: 'middles',
        },
        {
            id: 5,
            name: 'Jon Snow',
            src: images('./e2.png'),
            type: 'middles',
        },
        {
            id: 6,
            name: 'Daenerys Targaryen',
            src: images('./h2.png'),
            type: 'middles',
        },
        {
            id: 7,
            name: 'Arya Stark',
            src: images('./j2.png'),
            type: 'middles',
        },
        {
            id: 8,
            name: 'White Walker',
            src: images('./f2.png'),
            type: 'middles',
        },
    ],
    foots: [
        {
            id: 1,
            name: 'Cersei Lannister',
            src: images('./a3.png'),
            type: 'foots',
        },
        {
            id: 2,
            name: 'Jaime Lannister',
            src: images('./b3.png'),
            type: 'foots',
        },
        {
            id: 3,
            name: 'Tyrion Lannister',
            src: images('./c3.png'),
            type: 'foots',
        },
        {
            id: 4,
            name: 'Sansa Stark',
            src: images('./d3.png'),
            type: 'foots',
        },
        {
            id: 5,
            name: 'Jon Snow',
            src: images('./e3.png'),
            type: 'foots',
        },
        {
            id: 6,
            name: 'Daenerys Targaryen',
            src: images('./h3.png'),
            type: 'foots',
        },
        {
            id: 7,
            name: 'Arya Stark',
            src: images('./j3.png'),
            type: 'foots',
        },
        {
            id: 8,
            name: 'White Walker',
            src: images('./f3.png'),
            type: 'foots',
        },
    ],
}