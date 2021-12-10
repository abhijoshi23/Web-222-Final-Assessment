function checkForm() {
    return verifyStrings();
}


function verifyStrings() {

    let pwd = document.getElementById("password").value;
    let pwd1 = document.getElementById("password1").value;
    var main = document.getElementById("errorpanel").innerHTML = ""
    
    // For Password
    if (pwd.length == 6) {
        
        if (!((pwd.charCodeAt(0) >= 65 && pwd.charCodeAt(0) <= 90) || (pwd.charCodeAt(0) >= 97 && pwd.charCodeAt(0) <= 122))) {
            document.getElementById("errorpanel").innerHTML += "<p>Password must start with an alphabet</p>";
            return false;
        }

        if (pwd.search(/\d/) == -1) {
            document.getElementById("errorpanel").innerHTML += "<p>Password does not contain any digit</p>";
            return false;
        }

        if (pwd.search(/[A-Z]/) == -1) {
            document.getElementById("errorpanel").innerHTML += "<p>Password does not contain any upper case character</p>";
            return false;
        }

        if (pwd != pwd1) {
            document.getElementById("errorpanel").innerHTML += "<p>Passwords are not matching</p>";
            return false;
        }
    } else {
        document.getElementById("errorpanel").innerHTML += "<p>Password length must be 6 characters</p>";
        return false;
    }


    // For Username
    let user = document.getElementById("username").value;

    if (user.length >= 6) {

        if (!((user.charCodeAt(0) >= 65 && user.charCodeAt(0) <= 90) || (user.charCodeAt(0) >= 97 && user.charCodeAt(0) <= 122))) {
            document.getElementById("errorpanel").innerHTML += "<p>Username must start with an alphabet</p>";
            return false;
        }
    }else{
        document.getElementById("errorpanel").innerHTML += "<p>Username must be atleast 6 characters long</p>";
        return false;
    }
}

function clearerrorpanel(){
    document.getElementById('errorpanel').innerHTML = "<p>Errors (if any):</p>";
}