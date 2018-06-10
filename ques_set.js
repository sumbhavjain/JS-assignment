// Question 1
console.log("\n this is the 1st question: \n")
function upper_case(str)
{
   regexp = /^[A-Z]/
   if (regexp.test(str))
    {
      console.log("First character is uppercase")
    } 
    else
    {
      console.log("First character is not uppercase")
    }
}
upper_case('Abcd')
upper_case('abcd')

// Question 2
console.log("\n this is the 2nd question: \n")
function str_WSpace(str){
    regexp= /^[a-zA-Z0-9_]*$/
    if (regexp.test(str))
    {
      console.log("It is a valid string")
    } 
    else
    {
      console.log("It is not a valid string")
    }
}

str_WSpace('my name is sambhav jain')
str_WSpace("mynameissambhavjain")

// Question 3
console.log("\n this is the 3rd question: \n")
function num_only(str){
    regexp= /^[0-9]*$/
    if (regexp.test(str))
    {
      console.log("It is a valid string")
    } 
    else
    {
      console.log("It is not a valid string")
    }
}

num_only("231314")
num_only('sfew321434')


// Question 4
console.log("\n this is the 4th question: \n")
function is_url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
        if (regexp.test(str))
        {
          return true
        }
        else
        {
          return false
        }
}

console.log(is_url("http://www.example.com"))
console.log(is_url("https://www.example.com"))
console.log(is_url("www.example.com"))

// Question 5
console.log("\n this is the 5th question: \n")
function is_hexcolor(str)
{
 regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
  
        if (regexp.test(str))
          {
            return true
          }
        else
          {
            return false
          }
}

console.log(is_hexcolor("#429"))
console.log(is_hexcolor("#89798"))

// Question 6
console.log("\n this is the 6th question: \n")
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
    };
console.log(student)
delete student.rollno
console.log(student)    

// Question 7
console.log("\n this is the 7th question: \n")
var student1 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
    };
var size = Object.keys(student1).length
console.log("The size of the object is: " + size)

// Question 12
console.log("\n this is the 12th question: \n")
var first =  function(array, n) {
  if (array == null) 
  return void 0
if (n == null) 
  return array[0]
if (n < 0)
  return []
return array.slice(0, n)
}

console.log(first([7, 9, 0, -2]))
console.log(first([],3))
console.log(first([7, 9, 0, -2],3))
console.log(first([7, 9, 0, -2],6))
console.log(first([7, 9, 0, -2],-3))

// Question 13
console.log("\n this is the 13th question: \n")
var array1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
var most_freq = 1
var m = 0
for (let i=0; i<array1.length; i++)
{
        for (let j=i; j<array1.length; j++)
        {
                if (array1[i] == array1[j])
                 m++
                if (most_freq<m)
                {
                  most_freq=m
                  var item = array1[i]
                }
        }
        m=0
}
console.log("Most repeated item is: " + item+" ( " +most_freq +" times ) ")

// Question 14
console.log("\n this is the 14th question: \n")
var array = [1, 2, 3, 4, 5, 6]
var sum = 0
var prod = 1
for (let i = 0; i < array.length; i += 1) 
   {
    sum += array[i]
    prod *= array[i]
    }
console.log('Sum : '+sum +"\n" + 'Product :  ' +prod); 

// Question 16
console.log("\n this is the 16th question: \n")
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]] 
for (var i in a) 
{
   console.log("row " + i)
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j])
     }
}