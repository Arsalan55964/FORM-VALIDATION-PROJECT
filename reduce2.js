 const nums = [ 1, 2, 3]

//  const totalnums = nums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}  and  currval: ${currval}`);
    
//     return acc + currval
//  }, 0) 


const mytotal = nums.reduce((acc, curr) => acc+curr, 0)

 console.log(mytotal);



 const shopingcart = [

   { itemname : "js-course",
      price : 2999
   },

   { itemname : "mobile dev course",
    price : 5999
 },
   { itemname : " data scince",
    price : 12999
   }

 ]


 const pricetopay = shopingcart.reduce((acc, item) => acc + item.price,0)

 console.log(pricetopay);
 