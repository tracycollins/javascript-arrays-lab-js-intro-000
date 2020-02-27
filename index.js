var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten)
}

function appendKitten(kitten) {
  return kittens.concat([kitten])
}

function prependKitten(kitten) {
  return [kitten].concat(kittens)
}

function prependKitten(kitten) {
  return kittens.slice(-1)
}

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
