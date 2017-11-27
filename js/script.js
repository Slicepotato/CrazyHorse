function passCode() {
    var inpObj = document.getElementById("id1").value; 
    // added the .value method so you can actually get the value output from this object
    if (inpObj > 999 && inpObj < 10000) { 
        // inpObj.checkValidity() == false | this does nothing
        // set to evaluate the determined value in the number range
        document.getElementById("passcode").style.display = 'block';
        document.getElementById("passcode").innerHTML = "Passcode Valid!";
    } else {
        document.getElementById("passcode").style.display = 'block';
        document.getElementById("passcode").innerHTML = "Please enter a value between 1000 and 9999.";
    }
}