// Question 1
console.log("\n this is the first question: \n")
var a=22
var b=45
console.log("number variables are: " + a,b )

// Question 2
console.log("\n this is the second question: \n")
function mul(para1, para2){
    return para1*para2
}
console.log("Result of multiplication is: " + mul(21,56));

// Question 3
console.log("\n this is the third question: \n")
function joinStr(para1, para2){
    if((typeof para1==typeof para2) && (typeof para1== 'string')){
    var result= para1+para2
    return result.length
    }
    else{
        return false
    }
}
console.log(joinStr('abc','abc'))
console.log(joinStr('ac',123))


// Question 4
console.log("\n this is the fourth question: \n")
var str = "Please locate where 'locate' occurs!" 
console.log("Index of 'where' is: " + str.indexOf('where'))
console.log("Last index of 'locate' is: " + str.lastIndexOf('locate'))

// Question 5
console.log("\n this is the fifth question: \n")
var str1 = "Please locate where 'locate' occurs!" 
console.log(str1.slice(7,13))

// Question 6
console.log("\n this is the sixth question: \n")
var str2 = "Please visit Microsoft!" 
var rep_str= str2.replace('Microsoft','google')
console.log(rep_str)

// Question 7
console.log("\n this is the seventh question: \n")
var text1 = "Hello World!"
var up= text1.toUpperCase()
console.log(up)
var low= text1.toLowerCase()
console.log(low)

// Question 8
console.log("\n this is the eighth question: \n")
var text = "Hello!"
var arr_text = text.split(',')
console.log(arr_text)

// Question 9
console.log("\n this is the ninth question: \n")
var fruits = [ "Banana" , "Orange" , "Apple" , "Mango" ]
console.log("Adding an element")
fruits.push('Pineapple')
console.log(fruits)
console.log("Removing an element")
fruits.pop('')
console.log(fruits)
console.log("checking whether a variable is an array ")
console.log(Array.isArray(fruits))
console.log("changing the specific value to another value") 
fruits[2]="Kiwi"
console.log(fruits)
console.log("Add an element to a specific location") 
 fruits.splice(1,0,"Mango") 
 console.log(fruits) 
 var str=fruits.toString() 
console.log(str)


// Question 10
console.log("\n this is the tenth question: \n")
var x = 9.656
var str_x= x.toString()
console.log(str_x)
console.log(x.toFixed(2))


// Question 11
console.log("\n this is the eleventh question: \n")
var x = 7.65
console.log(Math.round(x))
console.log(Math.sqrt(x))

// Question 12
console.log("\n this is the twelth question: \n")
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

console.log(getRandomInt(0,9))
console.log(getRandomInt(0,99))  

// Question 13
console.log("\n this is the thirteenth question: \n")
var points = [40,100,1,5,25,10]
var sort_points = points.sort(function(a, b){return a - b})
console.log(sort_points)