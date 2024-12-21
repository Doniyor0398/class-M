class BankAccount {
  constructor({ name, initialBalance, password }) {
    this._name = name;
    this._initialBalance = initialBalance;
    this._password = password;
    this._historyTransiction = [];
  }

  get name() {
    return this._name;
  }

  get balance() {
    return this._initialBalance;
  }

  get password() {
    return this._password;
  }

  get getTransiction() {
    return this._historyTransiction;
  }

  deposit(amount, password) {
    if (password !== this._password) {
      throw new Error("Пароль не верный, проверьте и попробуйте сново");
    } else if (amount <= 0) {
      return `Сумма должна быть положительное, вы ввели сумма ${amount}$`;
    } else {
      this._initialBalance += amount;

      this._historyTransiction.push({
        type: "Депозить",
        amount: amount,
        date: new Date(),
      });

      return `Пополнен счен на ${amount}$ Ваш новый баланс: ${this._initialBalance}$`;
    }
  }

  withdraw(amount, password) {
    if (password !== this._password) {
      throw new Error("Пароль не верный, проверьте и попробуйте сново");
    } else {
      if (amount > this._initialBalance) {
        return `Не достатночное средства на вашем счете. Ваш баланс: ${this._initialBalance}$`;
      } else {
        this._initialBalance -= amount;

        this._historyTransiction.push({
          type: "Снять денег",
          amount: amount,
          date: new Date(),
        });

        return `Снято денег с вашего счета ${amount}$. Ваш новый баланс: ${this._initialBalance}$`;
      }
    }
  }

  getBalance(password) {
    if (password !== this._password) {
      throw new Error("Пароль не верный, проверьте и попробуйте сново");
    } else {
      return `Ваш текущий баланс ${this._initialBalance}$`;
    }
  }

  changePassword(oldPassword, newPassword) {
    if (oldPassword !== this._password) {
      throw new Error("Пароль не верный, проверьте и попробуйте сново");
    } else {
      oldPassword = null;

      this._historyTransiction.push({
        type: "Именение пароль",
        newPassword: newPassword,
        date: new Date(),
      });
      this._password = newPassword;
      return `Пароль изменень ваш новый пароль: ${newPassword}`;
    }
  }

  getTransactionHistory(password) {
    if (password !== this._password) {
      throw new Error("Пароль не верный, проверьте и попробуйте сново");
    } else {
      let historyTransiction = "";
      console.log("---------------Ваша история---------------");
      this._historyTransiction.forEach((history) => {
        if (history.type === "Депозить") {
          historyTransiction += `

Вы совершили: ${history.type}
Попольнение счета: ${history.amount}$
Дата и время: ${history.date}
          `;
        } else if (history.type === "Снять денег") {
          historyTransiction += `

Вы совершили: ${history.type}
Cнято со счета: ${history.amount}$
Дата и время: ${history.date}
          `;
        } else if (history.type === "Именение пароль") {
          historyTransiction += `

Вы совершили ${history.type}
Вы изменили пароль на: ${history.newPassword}
Дата и время: ${history.date}
                    `;
        }
      });

      return historyTransiction;
    }
  }
}
module.exports = BankAccount;
