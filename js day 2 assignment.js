/* eslint-disable strict */
function findMax(arr){
  let i=1;
  var max = arr[0];
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  console.log(max)
}
    
    
findMax([1,2,3,4,5])


function findAverage(numbers){
  avg = sum = count =0;
  var numerals = numbers.length + 1;
  while ( count < numerals )
    numbers.push( count++ );
  
  numbers.forEach(function(n){
    sum += n; 
    avg = sum / numbers.length;
  });
  console.log(Math.round(avg))
        
        
}
findAverage([1,2,3,4,5,7,8,9,10,11,12,13])


//test//