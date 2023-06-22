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


const xmenCharacters = [
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
const avengersCharacters = [
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

// function findCommonCharacter(xmenCharacters, avengersCharacters){
//     if (!Array.isArray(xmenCharacters)){
//         return console.log("xmenCharacters is not an array")
//     }
//     if (!Array.isArray(avengersCharacters)){
//         return console.log("avengersCharacters is not an array")
//     }
//     for (let character of xmenCharacters){
//         for (let member of avengersCharacters){
//             if (character.name === member.name) {
//                 console.log(character.name+" is a member of both X-Men and the Avengers")
//             }
//         }
// }
// }
// findCommonCharacter()


const findCommonCharacter = (arr1, arr2) => {
    if (!Array.isArray(arr1)){
        return console.log("parameter 1 is not an array")
    }
    if (!Array.isArray(arr2)){
        return console.log("parameter 2 is not an array")
    }
    for (let character of arr1){
        for (let member of arr2){
            if (character.name === member.name) {
                console.log(character.name+" is a member of both X-Men and the Avengers")
            }
        }
}
}
findCommonCharacter(xmenCharacters,avengersCharacters)

// nombre y fecha. sortear por fecha 