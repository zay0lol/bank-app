let balance = 0;

function updateBalance() {
  document.getElementById('balance').textContent = balance;
}

function deposit() {
  let amount = parseFloat(document.getElementById('amount').value);
  if (isNaN(amount) || amount <= 0) {
    alert("please enter a valid amount");
    return;
  }
  balance += amount;
  updateBalance();
}

function withdraw() {
  let amount = parseFloat(document.getElementById('amount').value);
  if (isNaN(amount) || amount <= 0) {
    alert("please enter a valid amount");
    return;
  }
  if (amount > balance) {
    alert("less balance.");
    return;
  }
  balance -= amount;
  updateBalance();
}
