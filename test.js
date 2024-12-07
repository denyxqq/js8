// #1

const friends = ["mango", "poly", "kiwi", "ajax"];
let string = "";
for (const friend of friends) {
    string += friend + ","
}
console.log(string);
const striing = friends.join(",");
console.log(string);

// #2

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

// #3

const cardToRemowe = "Карточка-3";
cards.splice(1, 2);
console.log(cards);
 
// #4

const cardToInsert = "Карточка-6";
cards.splice(3, 0, "карточка-6", "карточка-7");
console.log(cards);

// #5

const cardToUpdate = "Карточка-4";
cards.splice(5, 2, "карточка-8", "карточка-9");
console.log(cards);