const fs = require('fs')
const path = require('path')

const getInput = () =>
  fs.promises.readFile(path.join(__dirname, '..', 'inputs', 'day01.txt'))
    .then(fileContent =>
      fileContent
        .toString()
        .trim()
        .split('\n')
        .map(line => parseInt(line, 10))
    )

const day01a = input =>
  input
    .reduce((totalFrequency, currentFrequency) =>
      totalFrequency + currentFrequency
    )

const day01b = input => {
  const frequenciesVisited = new Set()
  let foundDuplicate = undefined
  let tempFrequency = 0

  while (foundDuplicate === undefined) {
    tempFrequency = input
      .reduce((totalFrequency, currentFrequency) => {
        const newTotalFrequency = totalFrequency + currentFrequency

        if (foundDuplicate === undefined && frequenciesVisited.has(newTotalFrequency)) {
          foundDuplicate = newTotalFrequency
        }

        frequenciesVisited.add(newTotalFrequency)

        return newTotalFrequency
      }, tempFrequency)
  }

  return foundDuplicate
}

getInput()
  .then(input => {
    console.log(`day01a: ${day01a(input)}`)
    console.log(`day01b: ${day01b(input)}`)
  })
