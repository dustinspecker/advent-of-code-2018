const fs = require('fs')
const path = require('path')

const getInput = () =>
  fs.promises.readFile(path.join(__dirname, '..', 'inputs', 'day01.txt'))
    .then(fileContent =>
      fileContent
        .toString()
        .trim()
    )

const day01a = input =>
  input
    .split('\n')
    .map(line => parseInt(line, 10))
    .reduce((totalFrequency, currentFrequency) =>
      totalFrequency + currentFrequency
    )

getInput()
  .then(input => {
    console.log(`day01a: ${day01a(input)}`)
  })
