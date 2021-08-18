// using function bank account 

// get input num using function 
function inputValue(inputId){
    let getInput = document.getElementById(inputId);
    let inputConvartNum = parseFloat(getInput.value);
    getInput.value = "";
    return inputConvartNum;
};

// set deposite and withdraw money using function
function setMoneyDAndW(moneyId, inputBothNum){
    bothMoneyId = document.getElementById(moneyId);
    bothMoneyConvartNum = parseFloat(bothMoneyId.innerText);
    // console.log(bothMOneyConvartNum);
    let totalMoney = bothMoneyConvartNum + inputBothNum;
    bothMoneyId.innerText = totalMoney;
    return totalMoney;
};


// set balance money using function
function setBalanceMoney(depositeMoneyId, inputNum, isPositive){
    let balanceMoney = document.getElementById(depositeMoneyId);
    let balanceMoneyConvertNum = parseFloat(balanceMoney.innerText);
    // console.log(balanceMoneyConvertNum);

    if(isPositive == true){
        let totalBalanceMoney = balanceMoneyConvertNum + inputNum;
        balanceMoney.innerText = totalBalanceMoney; 
    }else{
        let totalBalanceMoney = balanceMoneyConvertNum - inputNum;
        balanceMoney.innerText = totalBalanceMoney;
    };

};

function getBalanceMoney(){
    const balanceMoney = document.getElementById("balanceMoney");
    const currentBalanceMoney = balanceMoney.innerText;
    return currentBalanceMoney;
}
// Deposite button clicking work
document.getElementById("submitDeposite").addEventListener("click", function(){
    // console.log("done");
    let inputDepositeNum = inputValue("inputDeposite");
    // console.log(inputDepositeNum);

    // const depositeCurrentBalanceMoney = getBalanceMoney();
    // console.log(depositeCurrentBalanceMoney);
    
    if(inputDepositeNum > 0 /* && inputDepositeNum <= depositeCurrentBalanceMoney */){
        setMoneyDAndW("depositeMoney", inputDepositeNum);
        setBalanceMoney("balanceMoney", inputDepositeNum, true);
    };
    


});

// Withdraw button clicking work
document.getElementById("submitWithdraw").addEventListener("click", function(){
    // console.log("done");
    let inputWithdrawNum = inputValue("inputWithdraw");
    // console.log(inputWithdrawNum);
    const withdrawCurrentBalanceMoney = getBalanceMoney();
    // console.log(withdrawCurrentBalanceMoney);
   
    if(inputWithdrawNum > 0 && inputWithdrawNum <= withdrawCurrentBalanceMoney){
        setMoneyDAndW("withdrawMoney", inputWithdrawNum);
        setBalanceMoney("balanceMoney", inputWithdrawNum, false);

        // advance added by me 
        let inputTag = document.getElementById("inputWithdraw");
        inputTag.style.border = "0";
    };

    if(inputWithdrawNum > withdrawCurrentBalanceMoney){
        // console.log("sorry")

        // advance added my be
        let inputTag = document.getElementById("inputWithdraw");
        inputTag.style.border = "2px solid red";
        
    };

});



// Account only deposite money and add total balance in balance money


/*
document.getElementById("submitDeposite").addEventListener("click", function(){
    // console.log("I am button of deposite");

    /// find input deposite value
    let inputDeposite = document.getElementById("inputDeposite");
    //  find deposite money palace
    let depositeMoney = document.getElementById("depositeMoney");

    // add inputDeposite money and deposite money 
    let totalDepositeMoney = parseFloat(depositeMoney.innerText) + parseFloat(inputDeposite.value);
    // console.log(totalDepositeMoney);
    // set both money in depositeMoney 
    depositeMoney.innerText = totalDepositeMoney;
    // delete before inputDeposite money
    inputDeposite.value = "";

    // find balance money 
    let balanceMoney = document.getElementById("balanceMoney");

    // add total deposite money and balance money get totalBalance money
    let totalBalanceMoney = parseFloat(balanceMoney.innerText) + totalDepositeMoney;
    // console.log(totalBalanceMoney);
    // set total balance money in balance money
    balanceMoney.innerText = totalBalanceMoney ;

});

// Account only withdraw money and add total balance in balance money

document.getElementById("submitWithdraw").addEventListener("click", function(){
    // find inputWithdraw id 
    let inputWithdraw = document.getElementById("inputWithdraw");
    // console.log(inputWithdraw.value);
    // find withdrawMoney 
    let withdrawMoney = document.getElementById("withdrawMoney");
    // console.log(withdrawMoney);
    let totalWithdrawMoney = parseFloat(inputWithdraw.value) + parseFloat(withdrawMoney.innerText);
    withdrawMoney.innerText = totalWithdrawMoney;
    inputWithdraw.value = "";

    // find balance money
    let balanceMoney = document.getElementById("balanceMoney");
    let totalBalanceMoney = parseFloat(balanceMoney.innerText) - totalWithdrawMoney;
    balanceMoney.innerText = totalBalanceMoney; 
});
*/