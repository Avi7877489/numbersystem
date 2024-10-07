const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let primeArray = []
  let num = numbers[i]
for(let i = 0;i < numbers.length;i++){
    let count = 0
    for(let j = 1;j<= numbers[i];j++){
        if(numbers[i] % j === 0){
            count++
        }
    }
    if(count === 2){
    primeArray.push(num)
    }
}  
let max = primeArray[0]
let min = primeArray[0]
let sum = 0

for(i = 0;i , primeArray.length;i++){
    if(primeArray[i] > max){
        max = primeArray[i]
    }
    if(primeArray[i] < min){
        min = primeArray[i]
    }
    sum+= primeArray[i]
}
console.log(max)
console.log(min)
console.log(sum)
