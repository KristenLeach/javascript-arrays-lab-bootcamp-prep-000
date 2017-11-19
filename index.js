const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten (array){
  kittens.push('Ralph');
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(1);
}

function appendKitten(name){
  return [...kittens, "Broom"];
}

function prependKitten(name){
  return ['Arnold', ...kittens];
}

function removeLastKitten(){
  kittens.slice(0, kittens.length - 1);
  return kittens;
}

function removeFirstKitten(){
  kittens.slice(1);
  return kittens;
}