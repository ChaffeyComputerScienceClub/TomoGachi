const options = document.querySelectorAll('.sidebar-option');
let activeOption = null;
let currentScreen = null;
let switchScreen = false;
let filter = "All";

const mini_option1 = [
    "All",
    "Food",
    "Cosmetic"
];
const mini_option2 = [
    "All",
    "Food",
    "Cosmetic"
];
const mini_option3 = [

];
const mini_option4 = [
    "4test1",
    "4test2",
    "4test3",
    "4test4"
];


options.forEach(option => {
    option.addEventListener('click', function() {
    options.forEach(opt => opt.classList.remove('active'));
    if (this.id == activeOption){
        clearSideBar();
        activeOption = null;

    }
    else {
        this.classList.add('active');
        document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
        activeOption = this.id;
        if (currentScreen != this.id){
            currentScreen = this.id;
            switchScreen = true;
            console.log(currentScreen);
        }
        if (this.id == 'option1'){
            clearSideBar();
            appendMiniSidebar(this.id);
            if (switchScreen) {
                clearScreen();
                shopLoadProducts('All');
            }
        }
        else if(this.id == 'option2') {
            clearSideBar();
            appendMiniSidebar(this.id);
            if (switchScreen) {
                clearScreen();
                invLoadInventory('All');
            }
        }
        else if(this.id == 'option3') {
            clearSideBar();
            appendMiniSidebar(this.id);
            if (switchScreen) {
                clearScreen();
                savingLoadBudget();
            }
        }
        else if(this.id == 'option4') {
            clearScreen();
            clearSideBar();
            appendMiniSidebar(this.id);
        }   
        switchScreen = false;
    }
});
});

function clearScreen() {
    const shop_grid = document.getElementById("shop-grid");
    shop_grid.innerHTML = "";
 
}

function clearSideBar() {
    const mini_sidebar = document.getElementById("mini-sidebar");
    mini_sidebar.innerHTML = "";
    mini_sidebar.style.opacity = 0;
}

function appendMiniSidebar(option) {
    const mini_sidebar = document.getElementById("mini-sidebar");
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
    mini_sidebar.style.opacity = 1;
    mini_option.forEach(item => {
        let mini_sidebar = document.getElementById('mini-sidebar');
        let mini_option = document.createElement("div");
        mini_option.className = 'mini-option';
        mini_option.textContent = item;
        mini_sidebar.appendChild(mini_option);
    });
    const mini_options = document.querySelectorAll('.mini-option');
    mini_options.forEach(mini_option => {
        mini_option.addEventListener('click', function() {
            if (currentScreen == "option1"){
                clearScreen();
                shopLoadProducts(mini_option.innerHTML);
            }
            else if (currentScreen == "option2"){
                clearScreen();
                invLoadInventory(mini_option.innerHTML);
            }
            else if (currentScreen == "option3"){
                clearScreen();
                savingLoadBudget();
            }
        });
    });
    
}



