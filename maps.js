const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newnums = myNums.filter ((num)  =>  {


//       return num > 4 })
// console.log(newnums);



const newnums = []


myNums.forEach((num) => {
    if (num > 4) {

        newnums.push(num)

        
    }
})

console.log(newnums);

