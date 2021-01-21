var checking = {
    deposit: function(amnt) {
        var originalBalance = this.balance;
        this.balance = this.balance +(amnt);
        console.log("deposit succesful", originalBalance, "+", amnt, "=", this.balance);
    },
    withdrawl: function(amnt){
        var originalBalance = this.balance;
        this.balance = this.balance -(amnt);
        console.log("withdrawl succesful", originalBalance, "-", amnt, "=", this.balance);
    },
    
    balance: 10
}
checking.deposit (10);
checking.deposit(500);

checking.withdrawl(325);
checking.withdrawl(225);
