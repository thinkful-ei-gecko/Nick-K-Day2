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
    