// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat(name) {
  const catsCopy = cats.slice();
  catsCopy.push(name);
  return catsCopy;
}

function prependCat(name) {
  const catsCopy = cats.slice();
  catsCopy.unshift(name);
  return catsCopy;
}

function removeLastCat(name) {
  const catsCopy = cats.slice();
  catsCopy.pop(name);
  return catsCopy;
}
function removeFirstCat(name) {
  const catsCopy = cats.slice();
  catsCopy.shift(name);
  return catsCopy;
}
