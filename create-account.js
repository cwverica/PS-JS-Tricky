function createAccount(pin, amount = 0) {
    this.pin = pin;
    this.balance = amount;
}
createAccount.prototype.checkPin = (function (provided) {
    if (provided !== this.pin) return false;
});

// checkbalance
createAccount.prototype.checkBalance = (function (provided) {
    if (!this.checkPin(provided)) return "Invalid PIN.";
    return `$${this.balance}`;
});

//deposit
createAccount.prototype.deposit = (function (provided, amount) {
    if (!checkPin(provided)) return "Invalid PIN.";
    balance += amount;
    return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
});

//withdraw
createAccount.prototype.withdraw = (function (provided, amount) {
    if (!checkPin(provided)) return "Invalid PIN.";
    if (amount > balance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
    } else {
        balance -= amount;
        return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
    };
});

//changepin
createAccount.prototype.changePin = (function (provided, newPin) {
    if (!checkPin(provided)) return "Invalid PIN.";
    pin = newPin;
    return "PIN succesfully changed!"
});


module.exports = { createAccount };
