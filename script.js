const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance"); // make sure HTML id is correct

const form = document.getElementById("transaction-form");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const noteInput = document.getElementById("note");
const transactionList = document.getElementById("transaction-list");

let transactions = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const transaction = {
        amount: Number(amountInput.value),
        type: typeInput.value,
        category: categoryInput.value,
        date: dateInput.value,
        note: noteInput.value
    };

    transactions.push(transaction);

    const li = document.createElement("li");
    li.textContent = transaction.category + " - ₹" + transaction.amount;
    transactionList.appendChild(li);

    updateSummary();   

    form.reset();
});

function updateSummary(){
    let income = 0;
    let expense = 0;

    transactions.forEach(function(transaction){
        if (transaction.type === "income"){
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }
    });

    const balance = income - expense;

    incomeEl.textContent = "₹" + income;
    expenseEl.textContent = "₹" + expense;
    balanceEl.textContent = "₹" + balance;
}