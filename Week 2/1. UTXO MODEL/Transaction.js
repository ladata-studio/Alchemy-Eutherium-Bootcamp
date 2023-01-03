class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }

  execute() {
    for (const inputUTXO of this.inputUTXOs) {
      if (inputUTXO.spent) {
        throw new Error('Found a spent input TXO.');
      }
    }

    const inputTotal = this.inputUTXOs.reduce(
      (total, inputUTXO) => inputUTXO.amount + total,
      0
    );
    const outputTotal = this.outputUTXOs.reduce(
      (total, outputUTXO) => outputUTXO.amount + total,
      0
    );
    
    if (inputTotal < outputTotal) {
      throw new Error(
        'The total value of the inputs is less than the total value of the \
        outputs.'
      );
    }

    for (const inputUTXO of this.inputUTXOs) {
      inputUTXO.spent = true;
    }

    this.fee = inputTotal - outputTotal;
  }
}

module.exports = Transaction;
