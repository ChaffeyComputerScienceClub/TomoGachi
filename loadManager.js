const options = document.querySelectorAll('.sidebar-option');
let activeOption = null;

const mini_option1 = [
    "1test1",
    "1test2",
    "1test3",
    "1test4"
];
const mini_option2 = [
    "2test1",
    "2test2",
    "2test3",
    "2test4"
];
const mini_option3 = [
    "3test1",
    "3test2",
    "3test3",
    "3test4"
];
const mini_option4 = [
    "4test1",
    "4test2",
    "4test3",
    "4test4"
];


options.forEach(option => {
    option.addEventListener('click', function() {
        if (this.id == activeOption){
            console.log('already selected');
            options.forEach(opt => opt.classList.remove('active'));
            activeOption = null;
        }
        else {
            this.classList.add('active');
            document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
            activeOption = this.id;
            if (this.id == 'option1'){
                clearScreen();
                appendMiniSidebar(this.id);
                shopLoadProducts();
            }
            else if(this.id == 'option2') {
                clearScreen();
                appendMiniSidebar(this.id);
                invLoadInventory();
            }
            else if(this.id == 'option3') {
                clearScreen();
                appendMiniSidebar(this.id);
            }
            else if(this.id == 'option4') {
                clearScreen();
                appendMiniSidebar(this.id);
            }
    }
});
});

function clearScreen() {
    const shop_grid = document.getElementById("shop-grid");
    shop_grid.innerHTML = "";
    const mini_sidebar = document.getElementById("mini-sidebar");
    mini_sidebar.innerHTML = "";
}

function appendMiniSidebar(option) {
    let mini_option = null;
    if (option === "option1"){
        mini_option = mini_option1;
    }
    else if (option === "option2"){
        mini_option = mini_option2;
    }
    else if (option === "option3"){
        mini_option = mini_option3;
    }
    else if (option === "option4"){
        mini_option = mini_option4;
    }

    mini_option.forEach(item => {
        let mini_sidebar = document.getElementById('mini-sidebar');
        let mini_option = document.createElement("div");
        mini_option.className = 'mini-option';
        mini_option.textContent = item;
        mini_sidebar.appendChild(mini_option);
    });
    
}

