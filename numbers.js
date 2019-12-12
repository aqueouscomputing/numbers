var num = [];
while (num.length < 3){
    num.push(Number(prompt("Enter a number: ")));
}

var smallest = num[0];
for (i = 0; i < num.length; i++)
    if (num[i] < smallest){
        smallest = num[i];
}
document.getElementById("smallest").innerHTML = "The smallest number is " + smallest;

var largest = num[0];
for (i = 0; i < num.length; i++)
    if (num[i] > largest){
        largest = num[i];
    }
document.getElementById("largest").innerHTML = "The largest number is " + largest;

var total = 0;
for (i = 0; i < num.length; i++)
    total = total + num[i];
document.getElementById("total").innerHTML = "The total of the numbers is " + total;
var average = total / num.length;

document.getElementById("average").innerHTML = "Total average of the numbers is " + average;
