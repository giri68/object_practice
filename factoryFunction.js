'use strict';
function createCharacter(Name, Nickname, Race, Origin, Attack, Defense) {
  return {
    Name, Nickname, Race, Origin, Attack, Defense,
    describe: function () {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evualateFight: function (character) {
      console.log(this);
      let x = this.Attack - character.Defense;
      let y = character.Attack - this.Defense;
      return `Your opponent takes ${x} and you receive ${y}`;
    }
  };
}


const characters = [createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6),
createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1),
createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
createCharacter("Aragon son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8),
createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),
]
characters.push(createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Rivendell", 5, 10),);
characters[0].evualateFight(characters[3])