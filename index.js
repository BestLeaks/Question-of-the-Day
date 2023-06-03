// Greet Message
console.log('Thanks for using questions-and-facts Questions Bundle!')

// Importing files
// Fact Files
const wyr = require('./directory/would-you-rather.json')
const inisityQuestions = require('./directory/inisity-questions.json')
const foodFacts = require('./directory/food-facts.json')

// Code starts

function question () {
  
  let allQuestions = [
    wyr[Math.floor(Math.random() * wyr.length)], inisityQuestions[Math.floor(Math.random() * spaceFacts.length)], foodFacts[Math.floor(Math.random() * foodFacts.length)]
  ]

  return{
    all: allQuestions[Math.floor(Math.random() * allFacts.length)],
    wyr: animalFacts[Math.floor(Math.random() * wyr.length)],
    inisityQuestions: inisityQuestions[Math.floor(Math.random() * inisityQuestions.length)],
    food: foodFacts[Math.floor(Math.random() * foodFacts.length)]
  }
}

// 5. Export all Modules
module.exports = {
  version: require('./package.json').version,
  question: question
}
