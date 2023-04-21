function calculate() {
    var l = document.getElementById("length").value;
    var w = document.getElementById("Width").value;
    var res = Number(l) * Number(w);

     document.getElementById("ans").innerHTML = "Calculater Area of Rectangular =" + res;
    
// window.alert("The area =" + res)

}

