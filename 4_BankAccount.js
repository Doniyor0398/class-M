class BankAccount {
  constructor(name, balance, password) {
    this.name = name;
    this.balance = balance;
    this.password = password;
    this.transactions = [];
  }

  deposit(amount, password) {
    if (password !== this.password) {
      throw new Error("Неверный пароль");
    }
    if (amount <= 0) {
      throw new Error("Сумма депозита должна быть положительной");
    }
    this.balance += amount;
    this.transactions.push({ type: "Депозит", amount, date: new Date() });
    return `Успешно пополняли счет. Ваш баланс: ${this.balance}$`;
  }

  withdraw(amount, password) {
    if (password !== this.password) {
      throw new Error("Пароль неверный");
    }

    if (amount > this.balance) {
      throw new Error("Недостаточно средств на баланс");
    }

    if (amount <= 0) {
      throw new Error("Сумма снятия должна быть положительной");
    }

    this.balance -= amount;
    this.transactions.push({ type: "Снятия денег", amount, date: new Date() });
    return `Успешно сняли денег. Ваш баланс: ${this.balance}$`;
  }

  getBalance(password) {
    if (password !== this.password) {
      throw new Error("Неверный пароль");
    }

    return `Ваш баланс: ${this.balance}$`;
  }

  changePassword(oldPassword, newPassword) {
    if (oldPassword !== this.password) {
      throw new Error("Неверный пароль");
    }

    if (newPassword.length < 6) {
      throw new Error("Новый пароль должен быть не менее 6 символов");
    }

    this.password = newPassword;
    return `Пароль успешно изменен. Ваш новый пароль ${newPassword}`;
  }

  getTransactionHistory(password) {
    if (password !== this.password) {
      throw new Error("Пароль не ваный");
    }
    return this.transactions;
  }
}

module.exports = BankAccount;
