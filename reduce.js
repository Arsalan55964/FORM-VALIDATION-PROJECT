const nums = [ 1, 2, 3]

 const totalnums = nums.reduce(function (acc, currval) {
    return acc + currval
 }, 0) 

 console.log(totalnums);
 