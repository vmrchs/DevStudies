let family = {
    incomes: [1350, 600, 400],
    expenses: [440, 650]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncome = sum(family.incomes)
    const calculateExpense = sum(family.expenses)

    const total = calculateIncome - calculateExpense

    const itsOk = total >= 0

    let banalceText = "negativo"
 
    if (itsOk) {
        balanceText = "positivo"
    }
    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()