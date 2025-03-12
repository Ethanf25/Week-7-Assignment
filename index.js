console.log(`#1) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`)

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //ARRAY WITH THE GIVEN VALUES
console.log(ages); //I LOGGED THE ARRAY TO SHOW THE VALUES IN THE CONSOLE

            console.log(`a) Programmatically subtract the value of the first element in the array from the value in the last element of the array.`)

                    let difference = ages[ages.length - 1] - ages[ages.length - 8] //I TOOK THE LAST VALUE (AGES.LENGTH - 1) AND SUBTRACTED THE ARRAY LENGTH BY 8 TO GET THE FIRST VALUE (3) TO SUBTRACT IT FROM THE LAST ELEMENT, (AGES.LENGTH - 8) TO GET 90.
                    console.log(difference); // THEN I LOGGED THE RESULT TO PRINT 90 TO THE CONSOLE.

            console.log(`b) Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`)

                    ages.push(27); //THIS WILL ADD (MY AGE) 27 TO THE END OF THE ARRAY MAKING THE VALUES: 3, 9, 23, 64, 2, 8, 28, 93, 27.
                    console.log(ages); //I JUST PUT THIS IN TO DISPLAY THE NEW ARRAY OF VALUES.
                    difference = ages[ages.length - 1] - ages[ages.length - 9]; //AGAIN, I TOOK THE LAST VALUE (AGES.LENGTH - 1) AND SUBTRACTED THE ARRAY LENGTH (9) TO GET THE FIRST VALUE (3) AND SUBTRACT IT FROM THE LAST ELEMENT, (AGES.LENGTH - 9) TO GET 24 THIS TIME.
                    console.log(difference); //THEN I LOGGED THE RESULT AGAIN TO PRINT 24 TO THE CONSOLE

            console.log(`c) Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`)
                    let totalAge = 0; // VARIBLE OF THE TOTAL AGE
                    for (let i = 0; i < ages.length; i++) { //THIS IS A "FOR" LOOP TO CALCULATE THE TOTAL AGE
                        totalAge += ages[i]; // THIS IS ADDING EACH AGE TO THE TOTAL AGE
                    } 
                    let averageAge = totalAge / ages.length; // THIS CALCULATES THE AVERAGE AGE BY DIVIDING THE TOTAL AGE BY THE NUMBER OF AGES IN THE ARRAY
                    console.log(averageAge); //THIS LOGS THE AVERAGE AGE INTO THE CONSOLE (28.5).



console.log(`#2) Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`)
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //HERE IS THE ARRAY LABELED NAMES THAT INCLUDE THE GIVEN NAMES
console.log(names); //I LOGGED THE LIST TO DISPLAY THE NAMES IN THE CONSOLE

            console.log(`a) Use a loop to iterate through the array and calculate the average number of letters per name.`)
            let totalLetters = 0; // HERE IS THE VARIABLE THAT WILL STORE THE TOTAL NUMBER OF LETTERS
            for (let i = 0; i < names.length; i++) { // THIS IS TO ADD THE LENGTH OF EACH NAME (NAMES[I].LENGTH) TO THE TOTALLETTERS VARIABLE
                totalLetters += names[i].length;
            }
            let averageLetters = totalLetters / names.length; // THIS CALCULATES THE AVERAGE NUMBER OF LETTERS PER NAME BY DIVIDING THE TOTAL NUMBER OF LETTERS BY THE NUMBER OF NAMES IN THE ARRAY
            console.log(averageLetters);

            console.log(`b) Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`)
            let concatenatedNames = ''; // THIS IS THE VARIABLE FOR THE CONCATENATED NAMES
            for (let i = 0; i < names.length; i++) {
                concatenatedNames += names[i] + ' ';
            }                                         // HERE, THIS LOOP CONCATENATES ALL THE NAMES IN THE ARRAY INTO A SINGLE STRING SEPARATED BY SPACES
            console.log(concatenatedNames.trim());  // THIS LOGS THE CONCATENATED STRING OF NAMES WITHOUT THE SPACE



console.log(`#3) How do you access the last element of any array?`)
let lastElement = names[names.length - 1]; // BY TAKING THE LENGTH OF THE "NAMES" VARIABLE AND SUBTACTING 1 WOULD GIVE US THE ENDING ELEMENT
console.log(lastElement); // THIS WILL PRING THE RESULT OF LASTELEMENT INTO THE CONSOLE WHICH IS "BOB"



console.log(`#4) How do you access the first element of any array?`)
// let firstElement = names[0];
// console.log(firstElement);       //FROM WHAT I WAS TAUGHT, THIS IS THE WRONG WAY OF FINDING THE FIRST ELEMENT,
//OR//
let firstElement = names[names.length - 6];  // AND THIS IS THE "RIGHT" WAY OF FINDING IT
console.log(firstElement); // PINTED TO THE CONSOLE AGAIN



console.log(`#5) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`)
let nameLengths = []; //ARRAY FOR NAMELENGTHS
for (let i = 0; i < names.length; i++) { // THIS IS THE LOOP THAT REPEATES OVER THE PREVIOUSLY CREATED NAMES AND ADDS THE LENGTH OF EACH NAME TO THE ARRAY.
    nameLengths.push(names[i].length);
}
console.log(nameLengths); // AGAIN, THE RESULT IS PRINTED TO THE CONSOLE



console.log(`#6) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)
let sumOfNameLengths = 0; // HERE IS THE VARIABLE TO STORE THE SUM OF ALL ELEMENTS
for (let i = 0; i < nameLengths.length; i++) { // THIS IS THE LOOP TO REPEAT OVER THE NAMELENGTHS ARRAY
    sumOfNameLengths += nameLengths[i]; // THIS WILL ADD EACH ELEMENT TO THE TOTAL
}
console.log(sumOfNameLengths); // PRINT THE SUM TO THE CONSOLE



console.log(`#7) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`)
function repeatWord(word, n) { //THIS IS THE FUNCTION I MADE, WHICH TAKES A WORD AND A NUMBER N, AND RETURNS THE WORD ADDED/CONCATENATED TO ITSELF N TIMES.
    let result = ''; // VARIABLE TO STORE THE RESULT
    for (let i = 0; i < n; i++) { // THIS LOOPS THE WORD TO CONCATENATE TO ITSELF N TIMES
        result += word; // ADDS THE WORD TO THE RESULT STRING N TIMES
    }
    return result; // RETURNS THE RESULT STRING WHICH CONTAINS THE WORD CONCATENATED TO ITSELF N TIMES
}
console.log(repeatWord('Hello', 3)); // THIS IS GOING TO OUTPUT 'HELLOHELLOHELLO' TO THE CONSOLE



console.log(`#8) Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`)
function getFullName(firstName, lastName) { // THIS IS GOING TO DEFINE THE FUNCTION NAMED GETFULLNAME WHICH TAKES THE TWO PARAMETERS "FIRSTNAME" AND "LASTNAME"
    return firstName + ' ' + lastName; // THIS PART OF THE FUNCTION WILL RETURN THE FULL NAME BY ADDING FIRSTNAME AND LASTNAME WITH A SPACE IN BETWEEN THEM
}
console.log(getFullName('John', 'Doe')); // THIS WILL PRINT THE RESULT "JOHN DOE" TO THE CONSOLE



console.log(`#9) Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)
function isSumGreaterThan100(numbers) { // THIS IS MY FUNCTION THAT'LL CHECK IF THE SUM OF AN ARRAY IS GREATER THAN 100
    let sum = 0; // VARIABLE TO STORE THE SUM OF THE NUMBERS
    for (let i = 0; i < numbers.length; i++) { // THIS WILL LOOP THROUGH EACH NUMBER IN THE ARRAY
        sum += numbers[i]; // THEN THIS IS GOING TO ADD EACH NUMBER TO THE SUM
    }
    return sum > 100; // THIS WILL RETURN TRUE IF THE SUM IS GREATER THAN 100, OTHERWISE IT'LL COME BACK AS FALSE
}
console.log(isSumGreaterThan100([10, 20, 30, 40, 50])); // THIS SHOULD PRINT TRUE TO THE CONSOLE



console.log(`#10) Write a function that takes an array of numbers and returns the average of all the elements in the array.`)
function getAverage(numbers) { // THIS IS THE FUNCTION THAT WILL RETURN THE AVERAGE OF AN ARRAY OF NUMBERS
    let sum = 0; // HERE IS THE VARIABLE TO STORE THE SUM OF THE NUMBERS
    for (let i = 0; i < numbers.length; i++) { // THIS IS WHERE IT WILL LOOP THROUGH EACH NUMBER IN THE ARRAY
        sum += numbers[i]; // THEN THIS IS GOING TO ADD EACH NUMBER TO THE SUM, SIMILAR TO QUESTION 9
    }
    return sum / numbers.length; // THIS WILL RETURN THE AVERAGE OF THE ELEMENTS BY DIVIDING THE SUM BY THE NUMBER OF ELEMENTS (5) IN THE ARRAY (150/5)
}
console.log(getAverage([10, 20, 30, 40, 50])); // THIS IS GOING PRINT 30 TO THE CONSOLE



console.log(`#11) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)
function isFirstArrayAverageGreater(arr1, arr2) { // THIS IS THE FUNCTION THAT WILL CHECK IF THE AVERAGE OF THE FIRST ARRAY IS GREATER THAN THE SECOND ARRAY
    function getAverage(numbers) { // THIS FUNCTION IS USED TO CALCULATE THE AVERAGE NUMBERS OF AN ARRAY
        let sum = 0; // VARIABLE TO STORE THE SUM OF THE NUMBERS
        for (let i = 0; i < numbers.length; i++) { // THIS SHOWS HOW IT WILL LOOP THROUGH EACH NUMBER IN THE ARRAY
            sum += numbers[i]; // THIS WILL ADD EACH NUMBER TO THE SUM
        }
        return sum / numbers.length; // THIS IS PART OF THE FUNCTION THAT WILL RETURN THE AVERAGE BY DIVIDING THE SUM BY THE NUMBER OF ELEMENTS
    }

    return getAverage(arr1) > getAverage(arr2); // THIS LINE COMPARES THE AVERAGES OF THE TWO ARRAYS AND WILL RETURN 'TRUE' IF THE FIRST AVERAGE IS GREATER
}

console.log(isFirstArrayAverageGreater([10, 20, 30], [5, 10, 15])); // THIS WILL PRINT TRUE TO THE CONSOLE



console.log(`#12) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)
function willBuyDrink(isHotOutside, moneyInPocket) { // THIS IS USED TO DEFINE THE FUNCTION 'WILLBUYDRINK' WITH THE PARAMETERS 'ISHOTOUTSIDE' AND 'MONEYINPOCKET'
    return isHotOutside && moneyInPocket > 10.50; // THE FUNCTION WILL RETURN TRUE IF IT IS HOT OUTSIDE AND 'MONEYINPOCKET' IS GREATER THAN 10.50, OTHERWISE IT WILL RETURN FALSE
}
console.log(willBuyDrink(true, 11)); // TRUE BECAUSE IT IS HOT OUTSIDE AND 'MONEYINPOCKET' IS GREATER THAN 10.50
console.log(willBuyDrink(false, 11)); // FALSE BECAUSE IT IS NOT HOT OUTSIDE EVEN THOUGH MONEYINPOCKET IS GREATER THAN 10.50
console.log(willBuyDrink(true, 10)); // FALSE BECAUSE THE VARIABLE 'MONEYINPOCKET' IS NOT GREATER THAN 10.50 EVEN THOUGH IT IS HOT OUTSIDE



console.log(`#13) Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)

function calculateTotalFishWeight(ishWeifghts) {
    let totalWeight = 0; // THE VARIABLE TO STORE THE TOTAL WEIGHT OF FISH
    for (let i = 0; i < fishWeights.length; i++) { // THE PART OF THE FUNCTION THAT IS GOING TO LOOP THROUGH EACH INDIVIDUAL FISH WEIGHT
        totalWeight += fishWeights[i]; // THIS WILL ADD EACH FISH WEIGHT TO THE TOTAL WEIGHT
    }
    return totalWeight; // THIS PART OF THE FUNCTION IS GOING TO RETURN THE TOTAL WEIGHT OF FISH CAUGHT
}

console.log(calculateTotalFishWeight([2.5, 3.0, 1.2, 4.5])); // THIS WILL PRINT THE TOTAL WEIGHT OF '11.2' TO THE CONSOLE

// THIS FUNCTION CALCULATES THE TOTAL WEIGHT OF FISH CAUGHT DURING A FISHING TRIP, IT WORKS BY TAKING THE ARRAY OF FISHWEIGHTS AND RETURNS THE TOTALWEIGHT. IT IS USED TO "SIMULATE" A FISHERMAN KEEPING TRACK OF HIS TOTAL WEIGHT CAUGHT.