var userName = prompt("enter your name")

alert("Welcome" + " "+ userName )


var numberOne = +prompt("enter your math number")
var numberTwo = +prompt("enter your computer number")
var numberThree = +prompt("enter your physics number")

var obtainedMark = numberOne + numberTwo + numberThree;

var totalmarks = 300;

var userPercentage = obtainedMark / totalmarks*100;

var round = Math.round(totalmarks)
document.write(userPercentage + " " + "%" +"<br>")


if (userPercentage >=80){
    document.write("grade A+" + "<br>")
    {
    document.write("Excellent")
    }
} 
else if (userPercentage >=70 || userPercentage >=80){
    document.write("grade A" + "<br>")
    {
    document.write("good" )
    } 
}
else if (userPercentage >= 60 || userPercentage >=70){
    document.write("grade B" + "<br>")
    {
    document.write("You need to improve")
    }
}
else {
    document.write("fail"  )
    {
    document.write("sorry")
    }
}
