
// Banking app to debit and credit a checking account


checking = 10;

function deposit(amnt) {
    var balance = checking + (amnt);
    console.log("deposit succesful", checking, "+", amnt, "=", balance);
    checking = balance;
    return balance;
}

function withdrawl(amnt) {
    var balance = checking - (amnt);
    console.log("withdrawl succesful", checking, "+", amnt, "=", balance);
    checking = balance;
    return balance;
}

deposit(75);
deposit(60);
deposit(110);
deposit(100);

withdrawl(50);
withdrawl(50);
withdrawl(50);
withdrawl(50);

/*
checking = deposit(75);
checking = deposit(60);
checking = deposit(110);
checking = deposit(100);

checking = withdrawl(50);
checking = withdrawl(50);
checking = withdrawl(50);
checking = withdrawl(50);
*/
