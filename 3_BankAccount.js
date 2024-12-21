class BankAccount {
  constructor({ name, initialBalance, password }) {
    this._name = name;
    this._initialBalance = initialBalance;
    this._password = password;
  }

  deposit(amount, password) {
    if (password !== this._password) {
      return "Не варный пароль, проверте и попробуйте сново";
    } else {
      if (amount <= 0) {
        return `Сумма должно быть положителное, проверте и попробуйте сново`;
      } else if (typeof amount !== "number" || isNaN(amount)) {
        return `Не коректный, введите только число`;
      } else {
        this._initialBalance += amount;
        return `Счет пополнен на ${amount}$, Баланс: ${this._initialBalance}$`;
      }
    }
  }
  withdrawv(amount, password) {
    if (password !== this._password) {
      return "Не варный пароль, проверте и попробуйте сново";
    } else {
      if (amount > this._initialBalance) {
        return `Не достаточное средсто на счете. Ваш баланс: ${this._initialBalance}$`;
      } else {
        this._initialBalance -= amount;
        return `Сняты деньги с вашего счёта ${amount}$. Ваш баланс: ${this._initialBalance}$`;
      }
    }
  }
  getBalance(password) {
    if (password !== this._password) {
      return "Не варный пароль, проверте и попробуйте сново";
    } else {
      return `Ваш баланс: ${this._initialBalance}$`;
    }
  }
  changePassword(oldPassword, newPassword) {
    if (oldPassword !== this._password) {
      throw new Error("Пароль неверный. Проверьте и попробуйте заново.");
    } else {
      this._password = newPassword;
      return `Пароль изменен. Ваш новый пароль: ${newPassword}`;
    }
  }
}
module.exports = BankAccount;
