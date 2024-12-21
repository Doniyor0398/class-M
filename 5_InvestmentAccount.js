const BankAccount = require("./4_BankAccount");

class InvestmentAccount extends BankAccount {
  constructor({ name, initialBalance, password }, investBalance) {
    super({ name, initialBalance, password });
    this._investBalance = investBalance;
    this._historyTransiction = [];
  }

  get investBalance() {
    return this._investBalance;
  }

  investInStock(stockName, amount, password) {
    if (password !== this._password) {
      throw new Error("Пароль неверный. Проверьте и попробуйте заново.");
    } else {
      this._investBalance += amount;
      this._initialBalance -= amount;

      this._historyTransiction.push({
        type: "Вложение в акции",
        amount: amount,
        date: new Date(),
      });

      return `
Вы вложили 20$ в акцию ${stockName}. Ваш текущий баланс: 20$.
Баланс на вашем банковском счете: 80$.
      `;
    }
  }

  withdrawInvestment(stockName, amount, password) {
    if (password !== this._password) {
      throw new Error("Пароль неверный. Проверьте и попробуйте заново.");
    } else {
      this._investBalance -= amount;

      this._historyTransiction.push({
        type: "Снять деньги с акции",
        amount: amount,
        date: new Date(),
      });
      return `Вы сняли деньги с акции ${stockName} в сумме: ${amount}$. Ваш текущий баланс: ${this._investBalance}$`;
    }
  }
  getInvestHistory(password) {
    if (password !== this._password) {
      throw new Error("Пароль не верный, проверьте и попробуйте сново");
    } else {
      let historyTransiction = "";
      console.log("---------------Ваша история---------------");
      this._historyTransiction.forEach((history) => {
        if (history.type === "Вложение в акции") {
          historyTransiction += `

Вы совершили: ${history.type}
Попольнение счета: ${history.amount}$
Дата и время: ${history.date}
          `;
        } else if (history.type === "Снять деньги с акции") {
          historyTransiction += `

Вы совершили: ${history.type}
Cнято со счета: ${history.amount}$
Дата и время: ${history.date}
          `;
        }
      });

      return historyTransiction;
    }
  }

  getInvestmentValue(stockName) {
    return `Стоимость текущих инвестиций в ${stockName} составляет ${this._investBalance}$`;
  }
}

module.exports = InvestmentAccount;
