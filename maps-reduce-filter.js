// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); 


const numbers1 = [1, 2, 3, 4, 5, 6, 7,  8,  9, 10];

// const evenNumbers2 = numbers.map((num) =>{  return num + 12});


const newnums =  numbers1
                      .map((num) => num * 10 )
                      .map ((num)  => num + 1 )
                      .filter ((num) => num >= 40)


console.log(newnums); 