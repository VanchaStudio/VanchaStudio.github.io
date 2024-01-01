//document.getElementById("AvatarImage").src = "bat1.png";

function LoadName() {
    input = localStorage.getItem('UserName'); //Name

    SocialCredit = localStorage.getItem('SomeNumber'); //Money
    document.getElementById("Soccredit").innerHTML = SocialCredit;

    document.getElementById("inputname").innerHTML = input; // Name

    //ImageLoad = localStorage.getItem("Change"); // Load Image

    if(localStorage.getItem("Change") == "[object HTMLImageElement]") {
        document.getElementById("AvatarImage").src = "Avatar.png";
    }
    else {
        ImageLoad = localStorage.getItem("Change");
        document.getElementById("AvatarImage").src = ImageLoad;
    }

    /*
    if(localStorage.getItem("Change") == null)
    {
        document.getElementById("AvatarImage").src = "Avatar.png";
    }*/
    //test = document.getElementById("AvatarImage");
    //test.src = "Avatar.png";
}

/*
function Change() {
    money = localStorage.getItem("SomeNumber");
    if(money >= 100) { 
        test = document.getElementById("AvatarImage");
        test.src = "Dead.png";
        localStorage.setItem("Change", test);
    }
} */


function ImageChange(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function() {
        let img = document.getElementById("AvatarImage");
        img.src = reader.result;
        let ImageSave = img.src;
        localStorage.setItem("Change", ImageSave);
    }
    
}


/*function Input() {
    var input = document.getElementById('input').value;
    if(input == "") {
        alert("Имя не введено");
    }
    else {
        localStorage.setItem('UserName', input);
        alert("Ваше имя: " + input);
        document.getElementById("inputname").innerHTML = input;
    }
}*/

