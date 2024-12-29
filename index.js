const BankAccount = require("./4_BankAccount");
const InvestmentAccount = require("./5_InvestmentAccount");

const myAccount = new BankAccount("Doniyorbek", 500, "1234");

console.log(myAccount.deposit(500, "1234"));
console.log(myAccount.transactions);
console.log(myAccount.withdraw(200, "1234"));
console.log(myAccount.transactions);
console.log(myAccount.getBalance("1234"));
console.log(myAccount.changePassword("1234", "Doniyorbek"));
console.log(myAccount.getTransactionHistory("Doniyorbek"));

const myInvestment = new InvestmentAccount(
  "Doniyorbek Abdurasulov",
  1000,
  "abcd"
);
console.log("Ваша Инвистция");
console.log(myInvestment.investInStock("Tesla", 1000, "abcd"));
