function createAccount(pin, amount = 0) {
    return {
        checkPin(provided) {
            if (provided !== pin) return false;
            return true;
        },

        // checkbalance
        checkBalance(provided) {
            if (!this.checkPin(provided)) return "Invalid PIN.";
            return `$${amount}`;
        },

        //deposit
        deposit(provided, depositAmt) {
            if (!this.checkPin(provided)) return "Invalid PIN.";
            amount += depositAmt;
            return `Successfully deposited $${depositAmt}. Current balance: $${amount}.`;
        },

        //withdraw
        withdraw(provided, depositAmt) {
            if (!this.checkPin(provided)) return "Invalid PIN.";
            if (depositAmt > amount) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            } else {
                amount -= depositAmt;
                return `Successfully withdrew $${depositAmt}. Current balance: $${amount}.`;
            };
        },

        //changepin
        changePin(provided, newPin) {
            if (!this.checkPin(provided)) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!"
        }
    };

};

module.exports = { createAccount };
