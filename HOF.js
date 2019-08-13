function repeat(fn,n){
    for(let i = 0; i < n; i++){
        fn();
    }
}

function hello(){
    console.log('hello World');

}

function goodbye(){
    console.log('Goodbye world');
}

repeat(hello,5);
repeat(goodbye,5);


function filter(arr,fn) {
    // TASK: Define your function here
    let newArray = [];
for(i=0;i < arr.length; i++){
    if(fn.arr[i] === true){
        newArray.push(arr[i]);
    }
}
return newArray;
}

filter(myNames);

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES



function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return (location =>{
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times(s) today!`)
    })
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado in the sky');
const hailWarning = hazardWarningCreator('Hail falling from the sky');


hailWarning('Miami')
hailWarning('london')
hailWarning('Atlanta')


let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
turtleSteps = turtleSteps.filter(steps => steps[0] >= 0 && steps[1] >= 0);

let totalTurtleSteps = turtleSteps.map(steps => steps[0] + steps[1]);

totalTurtleSteps.forEach(distance => {
  console.log(distance);
});

const strangeWords = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
    const arrayMaker = strangeWords.split(" ");
    const reduced = arrayMaker.reduce((normalWords,word) =>{
    if(word.length ===3){
     return normalWords + ' ';
    }
    else {
    return normalWords + word[word.length-1].toUpperCase();
    }
        
    },'');
    console.log(reduced)