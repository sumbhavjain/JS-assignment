// Question 1
console.log("\n this is the first question: \n")
function convertBtoD(input_num) {
    let decimal = parseInt(input_num, 2)
    console.log("Equivalent decimal number is: " + decimal + '\n')
}
 
convertBtoD("1110011000")
convertBtoD('11101010110000')

// Question 2
console.log("\n this is the second question: \n")
function convertDtoBHO(input_number){
    let binary = parseInt(input_number, 10).toString(2)
    console.log("Binary equivalent is: "+ binary + '\n')
    let hexadecimal = parseInt(input_number, 10).toString(16)
    console.log("Hexadecimal equivalent is: " + hexadecimal + '\n')
    let octal = parseInt(input_number, 10).toString(8)
    console.log("Octal equivalent is: " + octal + '\n')
}

convertDtoBHO("1989")
convertDtoBHO("564")

// Question 3
console.log("\n this is the third question: \n")
function randomInt(min, max) {
    if (min==null && max==null)
      return 0;    

      return min + Math.floor(Math.random() * (max - min + 1));
    };
   console.log(randomInt(2,8));

// Question 4
console.log("\n this is the fourth question: \n")
function decimals_place(num, dec_place) {
    if ((typeof num !== 'number') || (typeof dec_place !== 'number'))
      return false
    
       return num.toFixed(dec_place)
       }
   console.log(decimals_place(232.64465, 7))
   console.log(decimals_place(3424.5665,3))
   console.log(decimals_place(2100, 2))

// Question 5
console.log("\n this is the fifth question: \n")
function highestNum(array){
    console.log("The highest element in array is: " + Math.max(...array))
}
 
var array=[1,34,442,423,442,445,21,87]
highestNum(array);

// Question 6
console.log("\n this is the sixth question: \n")
function lowestNum(array){
    console.log("The lowest element in array is: " + Math.min(...array))
}

var array=[1,34,442,423,442,445,21,87]
lowestNum(array);

// Question 7
console.log("\n this is the seventh question: \n")
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(2154, 458))

// Question 8
console.log("\n this is the eighth question: \n")
function isPowerOfTwo (x)
{
 while (((x % 2) == 0) && x > 1) /* While x is even and > 1 */
   x /= 2
 return (x == 1)
}
var answer= isPowerOfTwo(38)
console.log(answer)

// Question 9
console.log("\n this is the ninth question: \n")
function fixDecimal(num,place){
    return num.toFixed(place)
}
var value = fixDecimal(7.454321,3)
console.log(value) 

// Question 10
console.log("\n this is the tenth question: \n")
protected_email = function (email) {
    var splitted_email = email.split("@")
    var part1 = splitted_email[0]
    var value5 = part1.length / 2
    part1 = part1.substring(0, (part1.length - value5))
    var part2 = splitted_email[1]
    return part1 + "...@" + part2
}

console.log(protected_email("sumbhavjain900@gmail.com"))

// Question 11
console.log("\n this is the eleventh question: \n")
function upFirstLetter(str){
    var uppercaseFirstLetter = str.charAt(0).toUpperCase() + str.slice(1)
    return uppercaseFirstLetter
}

var answer=upFirstLetter('my name is sambhav jain')
console.log(answer)

// Question 12
console.log("\n this is the twelfth question: \n")
function larger(num1,num2){
    if(parseInt(num1,10)>parseInt(num2,10)){
        console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".")
    }
    else
    if(parseInt(num2,10)>parseInt(num1,10)){
       console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".")
    }
    else{
        console.log("The values "+ num1+ " and "+num2+ " are equal.")
    }
}

var value1=larger(5,12)
console.log(value1)
// Doubt is: Why output shows undefined ?

// Question 13
console.log("\n this is the thirteenth question: \n")
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]]
var avg_marks=0
for(let i=0;i<students.length;i++){
    avg_marks+= students[i][1];
    var avg = (avg_marks/students.length)
}

if (avg < 60){
        console.log("Grade : F"); } 
else if (avg < 70) {
        console.log("Grade : D"); } 
else if (avg < 80) {
        console.log("Grade : C"); } 
else if (avg < 90) {
        console.log("Grade : B"); } 
else if (avg < 100) {
        console.log("Grade : A"); }

// Question 14
console.log("\n this is the fourteenth question: \n")
var m,n,chr;
for(m=1; m <=6; m++)
{
   for (n=1; n < m; n++)
     {
    chr=chr+('*')       
      }
 console.log(chr)
 chr=''  
}