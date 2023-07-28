function fn(){
    var a = document.getElementById("Username");
    var b = document.getElementById("Password");
  
    if(a.value.trim()=="" & b.value.trim()=="")
    {
        document.getElementById("unameh6").innerHTML="Username is required"
        document.getElementById("passh6").innerHTML="Password is required"
        a.style.border="1px solid red"
        b.style.border="1px solid red"
        return false;
    }
    else if(b.value.trim()== "")
    {
        document.getElementById("passh6").innerHTML="Password is required"
        b.style.border="1px solid red"
        return false;

    }

    else if(a.value.trim()== "")
    {
        document.getElementById("unameh6").innerHTML="Username is required"
        a.style.border="1px solid red"
        return false;
        
    }
    else if(a.value.trim() == "KP" && b.value.trim() == "kaustubh")
    {
        alert("Username and password is matching")
        return true;
    }
    else if(a.value.trim() == "Virat" && b.value.trim() == "KoHli")
    {
        alert("Username and password is matching")
        return true;
    }
    else
    {
        document.getElementById("btnh6").innerHTML="Username and Password is not matching"
        a.style.border="1px solid red"
        b.style.border="1px solid red"
        document.getElementById("btn").style.display="none"
        return false;
    }
}