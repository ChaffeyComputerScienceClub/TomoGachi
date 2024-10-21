const budgetOptions = [
    "Rent",
    "Shopping",
    "Insurance",
    "Food",
    "Other"
]




function savingLoadBudget() {
    const container = document.getElementById('shop-grid');
    budgetOptions.forEach(option => {
        const budgetDiv = document.createElement('div');
        budgetDiv.innerHTML = `
            <h2>${option}</h2>
            <meter value=""></meter>
            <input type="number">
            <input type="number">
            <input type="number">
            `;
        container.appendChild(budgetDiv);
    });
}