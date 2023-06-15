const marvel_characters = [
{   "name": "Professor X", 
    "isXMenMember": true
},
{   "name": "Spider-man",
    "isXMenMember": false
},
{   "name": "Cyclops",
    "isXMenMember": true
},
{   "name": "Daredevil", 
    "isXMenMember": false
},
{   "name": "Iron Fist",
    "isXMenMember": false
},
{   "name": "Iceman",
    "isXMenMember": true
}
]

for (let character of marvel_characters){
    if (character.isXMenMember === true) console.log(character.name+" is an X-Men Member")
}


const xmen_characters = [
    {   "name": "Beast" 
    },
    {   "name": "Wolverine"
    },
    {   "name": "Angel"
    },
    {   "name": "Jean Grey"
    },
    {   "name": "Storm"
    },
    {   "name": "Quicksilver"
    },
    {   "name": "Firestar" 
    }
]
const avengers_characters = [
    {   "name": "Iron Man" 
    },
    {   "name": "Quicksilver"
    },
    {   "name": "Captain America"
    },
    {   "name": "Beast"
    },
    {   "name": "Hulk"
    },
    {   "name": "Wolverine"
    },
    {   "name": "Storm"
    },
    {   "name": "Firestar" 
    }
]

function findCommonCharacter(xmen_characters, avengers_characters){
    for (let character of xmen_characters){
        for (let member of avengers_characters){
            if (character.name === member.name) {
                console.log(character.name+" is a member of both X-Men and the Avengers")
            }
        }
}
}
findCommonCharacter(xmen_characters,avengers_characters)