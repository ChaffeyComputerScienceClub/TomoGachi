const options = document.querySelectorAll('.sidebar-option');

options.forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        options.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
        if (this.id == 'option1'){
            clearScreen();
            shopLoadProducts();
        }
        else if(this.id == 'option2') {
            clearScreen();
            invLoadInventory();
        }
        else if(this.id == 'option3') {
            clearScreen();
        }
        else if(this.id == 'option4') {
            clearScreen();
        }
});
});

function clearScreen() {
    const shop_grid = document.getElementById("shop-grid");
    shop_grid.innerHTML = "";
}


