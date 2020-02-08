document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();

    let currentVal = 0;
   
    document.querySelector(".subtraction").addEventListener("click", function(e) { 
        let inputVal = parseInt(document.querySelector("#value-inputed").value);
        let outputVal = parseInt(document.querySelector(".output").innerText);
        currentVal = outputVal - inputVal;
        document.querySelector(".output").innerText = parseInt(currentVal);
        if (currentVal < 0) {
            document.querySelector(".output").style.color = "red";
        }
        else if (currentVal >= 0) {
            document.querySelector(".output").style.color = "black";
        }
    });

    document.querySelector(".addition").addEventListener("click", function(e) {
        let inputVal = parseInt(document.querySelector("#value-inputed").value);
        let outputVal = parseInt(document.querySelector(".output").innerText);
        currentVal = outputVal + inputVal;
        document.querySelector(".output").innerText = parseInt(currentVal);
        if (currentVal < 0) {
            document.querySelector(".output").style.color = "red";
        }
        else if (currentVal >= 0) {
            document.querySelector(".output").style.color = "black";
        }
    });
    

});