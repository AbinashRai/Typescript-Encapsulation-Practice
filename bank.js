"use strict";
class Bank {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} has been successfully withdrawn. New balance is ${this.balance}.`);
        }
        else {
            console.log("The amount should be greater than zero and less than or equal to your balance");
        }
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} has been deposited to your account, the new balance is ${this.balance}`);
        }
        else {
            console.log("Insert an amount greater than zero");
        }
    }
    get accNumber() {
        return this.accountNumber;
    }
    get updatedBalance() {
        return this.balance;
    }
}
// Instance
const userAccount = new Bank("12345", 1000);
userAccount.withdraw(200);
userAccount.deposit(700);
console.log(userAccount.accNumber);
console.log(`the updated balance is ${userAccount.updatedBalance}`);
