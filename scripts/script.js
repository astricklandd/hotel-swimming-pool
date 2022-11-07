
function display()
{
document.getElementById("displayarea").innerHTML = document.getElementById("name").value; 
document.getElementById("name").value = "";

document.getElementById("displayarea1").innerHTML = document.getElementById("user").value; 
document.getElementById("user").value = "";

document.getElementById("displayarea2").innerHTML = document.getElementById("pwd").value; 
document.getElementById("pwd").value = "";

document.getElementById("displayarea3").innerHTML = document.getElementById("holiday").value; 
document.getElementById("holiday").value = "";

document.getElementById("displayarea4").innerHTML = document.getElementById("hsStart").value;
document.getElementById("hsStart").value = "";

document.getElementById("displayarea5").innerHTML = document.getElementById("hsEnd").value; 
document.getElementById("hsEnd").value = "";

document.getElementById("displayarea6").innerHTML = document.getElementById("gender").value; 
document.getElementById("gender").value = "";

}

function resetProjectDetails() {
    document.getElementById("displayarea").innerHTML =""; 
    document.getElementById("name").value = "";
    
    document.getElementById("displayarea1").innerHTML = ""; 
    document.getElementById("user").value = "";
    
    document.getElementById("displayarea2").innerHTML = ""; 
    document.getElementById("pwd").value = "";
    
    document.getElementById("displayarea3").innerHTML = ""; 
    document.getElementById("holiday").value = "";
    
    document.getElementById("displayarea4").innerHTML = ""; 
    document.getElementById("hsStart").value = "";
    
    document.getElementById("displayarea5").innerHTML =""; 
    document.getElementById("hsEnd").value = "";
    
    document.getElementById("displayarea6").innerHTML = ""; 
    document.getElementById("gender").value = "";

}
