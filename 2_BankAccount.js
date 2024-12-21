class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber =
      accountNumber; /* Брат Я заметил, что в задаче свойство accountNumber нужно было просто объявить,
       но я решил его использовать в методах */
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      return "----_Error!_----";
    } else {
      this.balance += amount;
      return `\nВы внесли деньги: ${amount}$. Ваш баланс: ${this.balance}$ в счет: ${this.accountNumber}`;
    }
  }
  withdraw(amount) {
    if (amount > this.balance) {
      return `\nНедостаточное средства на счете ${this.balance}$`;
    } else {
      this.balance -= amount;
      return `С счета снято ${amount}$. Баланс: ${this.balance}$`;
    }
  }
  getBalance() {
    return `Ваш баланс: ${this.balance}$`;
  }
}

module.exports = BankAccount;
