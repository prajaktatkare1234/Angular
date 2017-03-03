
var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
    text=text+ arr[i];
}
console.log(text);
document.getElementById("demo").innerHTML = text;

