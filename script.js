// var a = 5;
// var b =10;
// var  w = a+b;
// var  x = a-b;
// var  y = a*b;
// var  z = a/b;

function add(){
    var a = parseInt(document.getElementById("n1").value);
    var b =parseInt(document.getElementById("n2").value);
    var  w = a+b;
    document.getElementById("Add").innerHTML=w;
}
function sub(){
    var a = parseInt(document.getElementById("n1").value);
    var b =parseInt(document.getElementById("n2").value);
    var  x = a-b;
    document.getElementById("Sub").innerHTML=x;
}
function mul(){
    var a =parseInt(document.getElementById("n1").value);
    var b =parseInt(document.getElementById("n2").value);
    var  y = a*b;
    document.getElementById("Mul").innerHTML=y;
}
function div(){
    var a =parseInt(document.getElementById("n1").value);
    var b =parseInt(document.getElementById("n2").value);
    var  z = a/b;
    document.getElementById("Div").innerHTML=z;
}
