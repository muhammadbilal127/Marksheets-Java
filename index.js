var userName = prompt("enter your name")

alert("Welcome" + " " + userName)


var numberOne = +prompt("enter your math number")
var numberTwo = +prompt("enter your computer number")
var numberThree = +prompt("enter your physics number")

var obtainedMark = numberOne + numberTwo + numberThree;

var totalmarks = 300;

var userPercentage = obtainedMark / totalmarks*100;

var round = Math.round(totalmarks)
alert(userPercentage + " " + "%")


if (userPercentage >=80){
    alert("grade A+")
    
{
    alert("Excellent")
}

} 
else if (userPercentage >=70 || userPercentage >=80){
    alert("grade A")
 
{
    alert("good")
}   
}
else if (userPercentage >= 60 || userPercentage >=70){
    alert("grade B")
    
{
    alert("You need to improve")
}
}
else {
    alert("fail")

{
    alert("sorry")
}
}
