// alert("WELCOME TO DIGITAL LIBRARY");
// let books = prompt('Title of the book');

// let author = prompt('Name of the author');

// let publisher = prompt('Name of the publisher');

// let bOoks = prompt('Title of the book');

// let aUthor = prompt('Name of the author');

// let pUblisher = prompt('Name of the publisher');

// let boOks = prompt('Title of the book');

// let auThor = prompt('Name of the author');

// let puBlisher = prompt('Name of the publisher');

// book01.innerHTML=books;
// author1.innerHTML=author;
// publisher1.innerHTML=publisher;
// book2.innerHTML=bOoks;
// author2.innerHTML=aUthor;
// publisher2.innerHTML=pUblisher;
// book3.innerHTML=boOks;
// author3.innerHTML=auThor;
// publisher3.innerHTML=puBlisher;

// const data  = {

//     "Author1": {
//         "book": books,
//         "author": author,
//          "publisher": publisher,
//     },

//     "Author2": {
//         "book": bOoks,
//         "author": aUthor,
//         "publisher": pUblisher,
//     },
//     "Author3": {
//         "book": boOks,
//         "author": auThor,
//         "publisher": puBlisher,
//     }

// }

// console.log(data);

// JONAS EXERCISES
// Assignment One
// BMI = mass / height ** 2 or mass / (height * height)
let johnMass = 92;
let johnHeight = 1.95;
let markMass = 78;
let markHeight = 1.69;

let johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);
let markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);
console.log(markBMI > johnBMI);

if (markBMI > johnBMI) {
  console.log(`markbmi (${markBMI}) is greater the johnbmi (${johnBMI}) `);
} else {
  console.log(`markbmi (${markBMI}) is lesser the johnbmi (${johnBMI}) `);
}

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
john.calcBMI();
mark.calcBMI();
console.log(
  `${john.fullName}'s BMI ${john.bmi}kg is lesser than ${mark.fullName}'s BMI ${mark.bmi}kg`
);
console.log(john.fullName);
console.log(john.bmi);

//  const teamDolphins = 96 + 108 + 89
//  const teamKaolas =  88 + 91 + 110
//  const averageScoreD = teamDolphins / 3
//   console.log(averageScoreD)
//  const averageScoreK = teamKaolas /3
//   console.log(averageScoreK)

//   if(averageScoreD > averageScoreK){
// console.log('teamDolphins is the winner')
//   }else{
//     console.log('teamKaolas is the winner')
//   }

// const teamDolphins = 97 + 112 + 102;
// const teamKaolas = 109 + 95 + 123;
// const averageScoreD = teamDolphins / 3;
// const averageScoreK = teamKaolas / 3;
// const minScore = 100

// if(averageScoreD < minScore){
// console.log('team dolphins wins')
// }
// if (averageScoreK > minScore){
//     console.log('team kaolas wins')
// }
// if ( averageScoreD === averageScoreK){
//     console.log('is it a draw')
// }

// const dolphins = 44 + 23 + 71
// const kaolas = 65 + 54 + 49

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// console.log(calcAverage())

// scoreDolphins = calcAverage(44 , 23 , 71)
// scoreKaolas = calcAverage(65, 54, 49)
// console.log(scoreDolphins, scoreKaolas)

// const checkWinner = function(avgDolpins, avgKaolas){
//   if (avgDolpins >= avgKaolas * 2){
//     console.log(`Dolphins won with ${avgDolpins} vs ${avgKaolas} `)
//   }else if (avgKaolas >= avgDolpins *2){
//     console.log(`Kaolas won with ${avgKaolas} vs ${avgDolpins}`)
//   }else {
//     console.log('no one wins')
//   }
// }
// checkWinner(scoreDolphins, scoreKaolas)
// checkWinner(600, 100)

// let num = Math.trunc(Math.random() * 6) + 1
// console.log(num)

// while (num !== 6) {
//   console.log(`you rolled a ${num}`)
//   num = Math.trunc(Math.random() * 6) + 1
//   if(num === 6){
//     console.log(`You have rolled ${num} so the loop will stop `)
//   }
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  const element = bills[i];
  console.log(element);
  const tip = calcTip(bills[i]);
  tips.push(element);
  totals.push(element + bills[i]);
}
console.log(bills, tips, totals);
