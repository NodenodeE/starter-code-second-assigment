
////////////////// MAIN OBJECT ///////
const account = {
  /// name of account-owner ///
  accountName: "Erika Nors",
  /// error when wrong input --> back to menu ///
  accountError: function () { 
      alert("Please enter a number between 1-5");
      atm();
    },
  /// the starting balance ///
  balance: 100,
  /// adds money if valid number is entered, if not --> error -> menu ////
  deposit: function () {
    let dep = parseFloat(prompt("Please enter sum to deposit"));
    if (isNaN(dep) || dep === "" || dep <= 0 || dep === null) {
      alert(this.accountError());
      this.deposit();
    } else {
      this.balance += dep;
      this.getBalance();
    }
    atm();
  },
   /// shows name of account-owner using variable --> back to menu ///////
  getAccountName: function () { 
      const getName = alert("Owner of the account is: " + this.accountName);
      console.log(getName);
      atm();
  },
   /// show how much money the account has using variable --> back to menu ///////
  getBalance: 
    function () { 
      alert("The current balance is: " + this.balance);
      atm();
  },
  /// subtract sum of money if valid number entered, if not --> error -> menu //////
  withdrawal: function () { 
    let draw = parseFloat(prompt("Please enter sum to withdraw"));
    if (isNaN(draw) || draw === "" || draw <= 0 || draw === null) {
      alert(this.accountError());
      this.withdrawal();
    } else if (draw > this.balance) {
      alert(
        "You must enter a valid sum!"
      );
      this.withdrawal();
    } else {
      this.balance -= draw;
      this.getBalance();
    }
    atm();
  },
  /// OBS not end the account, only closing window, if non-confirm --> menu ///////
  exitAccount: function () { 
    const exit = confirm("Do you want to close this window?");
    console.log(exit);
    if (exit) {
      window.close();
    } else {
      atm();
    }
  },
};

////////////////// MENU //////
/// the message that informs how to navigate, if other --> error //
function atm() {
  let choice = parseInt(
    prompt(
      "Please enter one of the following numbers, 1) See balance 2) Make a deposit 3) Make a withdrawal 4) Get account name 5) Exit"
    )
  );
///////// the choices ///////
  if (choice === 1) {
    account.getBalance();
  } else if (choice === 2) {
    account.deposit();
  } else if (choice === 3) {
    console.log(account.withdrawal());
  } else if (choice === 4) {
    console.log(account.getAccountName());
  } else if (choice === 5) {
    console.log(account.exitAccount());
  } else {
    console.log(account.accountError());
  }
}
atm();
// a switch statment isnt used since there arent a lot of options, 
// or options nested inside of eachother.
// it is much easier to debug a lot of switch statements compared to ifs.
// in this case, there are 6 different boolean choices, that dont need further choices,
// and the overview is easy.
//