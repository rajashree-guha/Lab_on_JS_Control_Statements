// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) console.log(i);
  }
  // Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
  var n = 0;
  while (n < 100) {
    n++
    if (n % 2 != 0) 
    console.log(n);
  }
  // Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
  var n=0
  do{
    n++
    if(n%3==0)
    console.log(n)
  }
  while(n<100)
  // Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

  for(let i=2;i<=100;i++){
    let isPrime=true;

    for(let j=2;j<i;j++){
        if(i%j===0){
         isPrime=false;
         break;
      }
    }

      if(isPrime){
        console.log(i);
       }
} 
    
   

         

    
