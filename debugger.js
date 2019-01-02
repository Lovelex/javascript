const seq = [1, 2, 1]

function almostIncreasingSequence(sequence) {
  const arr = sequence.sort((a, b) =>  a - b)
  console.log(arr)
  arr.every((value, i) => {
    console.log( value ) 
})
}

console.log( almostIncreasingSequence(seq) )