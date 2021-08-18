document.getElementById("submitBtn").addEventListener("click", function(){
    let emailText = document.getElementById("emailText");
    let passwordNum = document.getElementById("passwordNum");
    let userEmail = emailText.value
    let userPassword = passwordNum.value;
    if(userEmail == "proloyp23@gmail.com" && userPassword == "1234"){
        // console.log("yes");
        submitBtn.innerText = "Submited";
        submitBtn.style.color = "white";
        submitBtn.style.backgroundColor = "green";
        window.location.href = "banking.html";

    }else{
        let submitBtn = document.getElementById("submitBtn");
        // submitBtn.style.color = "red";
        submitBtn.innerText = "Wrong";
        submitBtn.style.fontWeight = "bold";
        submitBtn.style.backgroundColor = "red";
    }

    // let inputTexts = document.getElementsByClassName("inputText");
    // for(let inputText of inputTexts){
    //     // console.log(inputText);
    //     // console.log(inputText.value);
    //     if(inputText.value == "proloyp23@gamil.com"){
    //         console.log("yes");
    //     }else{
    //         console.log("no");
    //     }

    // }
});