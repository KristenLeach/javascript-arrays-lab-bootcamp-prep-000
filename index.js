const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten (array){
  kittens.push('Ralph');
}

function destructivelyPrependKitten(name){
  kittens.unshift('Ralph');
}