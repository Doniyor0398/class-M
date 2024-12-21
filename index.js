const BankAccount = require("./4_BankAccount");
const InvestmentAccount = require("./5_InvestmentAccount");

const objBankAccount = {
  name: "Doniyorbek",
  initialBalance: 100,
  password: 12345,
};

const myAccount = new BankAccount(objBankAccount);

console.log(myAccount);

console.log(myAccount.deposit(50, 12345));
console.log(myAccount.withdraw(50, 12345));
console.log(myAccount.getBalance(12345));
console.log(myAccount.changePassword(12345, "Doniyorbek"));
console.log(myAccount.withdraw(50, "Doniyorbek"));
console.log(myAccount.getTransactionHistory("Doniyorbek"));

// _________________class InvestmentAccount_________________

const myInvestObj = {
  name: "Doniyorbek",
  initialBalance: 100,
  password: myAccount._password,
};

const myInvest = new InvestmentAccount(myInvestObj, 0);

const passwordInvest = myAccount._password;
let amount = myAccount._initialBalance;
let knowledge = "Knowledge";

amount = 20;

console.log(myInvest);
console.log(myInvest.investInStock(knowledge, amount, passwordInvest));
console.log(myInvest.withdrawInvestment(knowledge, 10, passwordInvest));
console.log(myInvest.getInvestmentValue(knowledge));
console.log(myInvest.getInvestHistory(passwordInvest));
