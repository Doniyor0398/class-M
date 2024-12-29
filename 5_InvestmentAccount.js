const BankAccount = require("./4_BankAccount");

class InvestmentAccount extends BankAccount {
  constructor(name, balance, password) {
    super(name, balance, password);
    this.historyInvestment = {};
  }
  investInStock(stockName, amount, password) {
    if (password !== this.password) {
      throw new Error("Не верный пароль");
    }

    if (amount > this.balance) {
      throw new Error("Не достаточно средств для инвестирование");
    }

    if (amount <= 0) {
      throw new Error("Сумма инвестиция должна быть больше нуля");
    }

    this.balance -= amount;

    if (!this.historyInvestment[stockName]) {
      this.historyInvestment[stockName] = 0;
    }

    this.historyInvestment[stockName] += amount;

    this.transactions.push({
      type: "Инвестиция",
      stockName,
      amount,
      date: new Date(),
    });
    return this.historyInvestment;
  }

  getTransactionHistory(password) {
    if (password !== this.password) {
      throw new Error("Пароль не ваный");
    }
    return this.transactions;
  }
}

module.exports = InvestmentAccount;
