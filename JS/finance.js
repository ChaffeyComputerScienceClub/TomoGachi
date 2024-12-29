function financeLoadPage() {
    const shopGrid = document.getElementById("shop-grid");
    shopGrid.innerHTML = `
    <div class="financeDisplay">
        <div style="height:150px;">
        <h2 style="display:inline-block; margin-left:50%">$</h2>
        <input type="number" placeholder="0" id="monthlyIncome" class="incomeInput">
        <h2 id="month" class="monthName"></h2>
    </div>


    <div style="margin-left:8%; height:50px">
      <label style="margin-left: 0px; ">Spendings</label>
      <label style="margin-left: 400px; ">Budgeted</label>
    </div>
    
    <div style="margin-left: 0%;">
      <meter id="rentMeter" class="meter1" class="rent" max="100"></meter>
      <input type="number" id="rentBudget" class="budgetInput">
      <button id="rentButton" class="saveButton">Save</button>
      <br>
      <meter id="shoppingMeter" class="meter2" value=""></meter>
      <input type="number" id="shoppingBudget" class="budgetInput">
      <button id="shoppingButton" class="saveButton">Save</button>
      <br>
      <meter id="insuranceMeter" class="meter3" value=""></meter>
      <input type="number" id="insuranceBudget" class="budgetInput">
      <button id="insuranceButton" class="saveButton">Save</button>
      <br>
      <meter id="foodMeter" class="meter4" value=""></meter>
      <input type="number" id="foodBudget" class="budgetInput">
      <button id="foodButton" class="saveButton">Save</button>
      <br>
      <meter id="otherMeter" class="meter5" value=""></meter>
      <input type="number" id="otherBudget" class="budgetInput">
      <button id="otherButton" class="saveButton">Save</button>
    </div>

    <!-- add button which opens modal -->
    <button type="submit" class="popupButton" style="margin-left:45%;" id="add">Add</button>

      <div class="popUp" id="popup">
        <button id="exit" style="border-radius: 50%; margin-left: 90%; ">X</button>
        <br>
        <h1 class="headerForPopup">Add Spendings!</h1>
    
        <label for="spendings" style="margin-left: 10px; margin-top: 15px;">Spending Options:</label>
        <select name="options" id="selector">
            <option value="1">Rent</option>
            <option value="2">Shopping</option>
            <option value="3">Insurance</option>
            <option value="4">Food</option>
            <option value="5">Other</option>
        </select>
      
      <label for="spent" style="margin-left: 10px; margin-top: 15px;">Amount Spent:</label>
      <input class="inputBox "type="number" id="amountAdded">
      <br>
      <button style="margin-left: 40%; class="popupButton" margin-top: 20px;" type="submit" id="save">Save!</button>;
    </div>`
    
    var user = auth.currentUser;

    //popup buttons and elements
    var add = document.getElementById("add");
    add.addEventListener('click', openPopup);

    var save = document.getElementById("save");
    save.addEventListener('click', Save);

    var exit = document.getElementById("exit");
    exit.addEventListener('click', Exit);

    var popup = document.getElementById("popup");
    var selector = document.getElementById("selector");
    var amountAdded = document.getElementById("amountAdded");

    //all meters
    var rentMeter = document.getElementById("rentMeter");
    var shoppingMeter = document.getElementById("shoppingMeter");
    var insuranceMeter = document.getElementById("insuranceMeter");
    var foodMeter = document.getElementById("foodMeter");
    var otherMeter = document.getElementById("otherMeter");

    //budget amount input boxes and buttons for all meters
    var rentBudget = document.getElementById("rentBudget");
    var rentButton = document.getElementById("rentButton");

    var shoppingBudget = document.getElementById("shoppingBudget");
    var shoppingButton = document.getElementById("shoppingButton");

    var insuranceBudget = document.getElementById("insuranceBudget");
    var insuranceButton = document.getElementById("insuranceButton");

    var foodBudget = document.getElementById("foodBudget");
    var foodButton = document.getElementById("foodButton");

    var otherBudget = document.getElementById("otherBudget");
    var otherButton = document.getElementById("otherButton");

    var monthlyIncome = document.getElementById("monthlyIncome");
    monthlyIncome.addEventListener('focusout', MonthlyIncome);
    function MonthlyIncome() {
        var user = auth.currentUser;
        var val = Number(event.target.value);
        console.log(val);
        set(ref(db, "User/" + user.email + "/Finance/" + "/monthlyIncome/"), {
            MonthlyIncome: val
        })
    }

    rentBudget.onkeyup = function () {
        var user = auth.currentUser;
        if (rentBudget.value.length > 0) {
            rentButton.style.visibility = "visible";
            rentButton.onclick = function () {
                var rentMax = Number(rentBudget.value);
                rentMeter.setAttribute('max', rentMax)
                rentButton.style.visibility = "hidden";
                console.log(rentMax);
                update(ref(db, "User/" + user.email + "/Finance/" + "/Rent"), {
                    RentMax: rentMax
                })
            }
        }
        else if (rentBudget.value.length == 0) {
            rentButton.style.visibility = "hidden";
        }
    }

    shoppingBudget.onkeyup = function () {
        var user = auth.currentUser;
        if (shoppingBudget.value.length > 0) {
            shoppingButton.style.visibility = "visible";
            shoppingButton.onclick = function () {
                var shoppingMax = Number(shoppingBudget.value);
                shoppingMeter.setAttribute('max', shoppingMax)
                shoppingButton.style.visibility = "hidden";
                update(ref(db, "User/" + user.email + "/Finance/" + "/Shopping"), {
                    ShoppingMax: shoppingMax
                })
            }
        }
        else if (shoppingBudget.value.length == 0) {
            shoppingButton.style.visibility = "hidden";
        }
    }

    insuranceBudget.onkeyup = function () {
        var user = auth.currentUser;
        if (insuranceBudget.value.length > 0) {
            insuranceButton.style.visibility = "visible";
            insuranceButton.onclick = function () {
                var insuranceMax = Number(insuranceBudget.value);
                insuranceMeter.setAttribute('max', insuranceMax)
                insuranceButton.style.visibility = "hidden";
                update(ref(db, "User/" + user.email + "/Finance/" + "/Insurance"), {
                    InsuranceMax: insuranceMax
                })
            }
        }
        else if (insuranceBudget.value.length == 0) {
            insuranceButton.style.visibility = "hidden";
        }
    }

    foodBudget.onkeyup = function () {
        var user = auth.currentUser;
        if (foodBudget.value.length > 0) {
            foodButton.style.visibility = "visible";
            foodButton.onclick = function () {
                var foodMax = Number(foodBudget.value);
                foodMeter.setAttribute('max', foodMax)
                foodButton.style.visibility = "hidden";
                update(ref(db, "User/" + user.email + "/Finance/" + "/Food"), {
                    FoodMax: foodMax
                })
            }
        }
        else if (foodBudget.value.length == 0) {
            foodButton.style.visibility = "hidden";
        }
    }

    otherBudget.onkeyup = function () {
        var user = auth.currentUser;
        if (otherBudget.value.length > 0) {
            otherButton.style.visibility = "visible";
            otherButton.onclick = function () {
                var otherMax = Number(otherBudget.value);
                otherMeter.setAttribute('max', otherMax)
                otherButton.style.visibility = "hidden";
                update(ref(db, "User/" + user.email + "/Finance/" + "/Other"), {
                    OtherMax: otherMax
                })
            }
        }
        else if (otherBudget.value.length == 0) {
            otherButton.style.visibility = "hidden";
        }
    }


    function financeInvFindData(inputBox, meter, category, user) {
        var budget = document.getElementById(inputBox);
        var meter = document.getElementById(meter);
        get(ref(db, "User/" + user.email + "/Finance/" + "/monthlyIncome/"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    monthlyIncome.value = snapshot.val().MonthlyIncome;
                    return true;
                } else {
                    monthlyIncome.value = 0;
                }
            })

        get(ref(db, "User/" + user.email + "/Finance/" + category))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    if (category == "Rent") {
                        budget.value = snapshot.val().RentMax;
                        meter.max = snapshot.val().RentMax;
                        meter.value = snapshot.val().Rent;
                    }
                    else if (category == "Shopping") {
                        budget.value = snapshot.val().ShoppingMax;
                        meter.max = snapshot.val().ShoppingMax;
                        meter.value = snapshot.val().Shopping;
                    }
                    else if (category == "Insurance") {
                        budget.value = snapshot.val().InsuranceMax;
                        meter.max = snapshot.val().InsuranceMax;
                        meter.value = snapshot.val().Insurance;
                    }
                    else if (category == "Food") {
                        budget.value = snapshot.val().FoodMax;
                        meter.max = snapshot.val().FoodMax;
                        meter.value = snapshot.val().Food;
                    }
                    else if (category == "Other") {
                        budget.value = snapshot.val().OtherMax;
                        meter.max = snapshot.val().OtherMax;
                        meter.value = snapshot.val().Other;
                    }
                    return true;
                } else {
                    return false;
                }
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
    }

    /*document.addEventListener('DOMContentLoaded', function() {
    var user=auth.currentUser;
    console.log(user);
    
        for(var i=0; i<5; i++){
        financeInvFindData(array[i], array3[i], array2[i], user);
        }
    });*/

    function work() {
        var user = auth.currentUser;
        for (var i = 0; i < 5; i++) {
            financeInvFindData(array[i], array3[i], array2[i], user);
        }
    };

    var array = ["rentBudget", "shoppingBudget", "insuranceBudget", "foodBudget", "otherBudget"];
    var array2 = ["Rent", "Shopping", "Insurance", "Food", "Other"];
    var array3 = ["rentMeter", "shoppingMeter", "insuranceMeter", "foodMeter", "otherMeter"];

    function openPopup() {
        popup.style.display = "block";
    }

    function Exit() {
        popup.style.display = "none";
    }

    function Save() {
        var user = auth.currentUser;
        updateMeter(selector.value, amountAdded.value, user);
        popup.style.display = "none";
    }


    function updateMeter(category, amount, user) {
        var newmonthlyIncome = +monthlyIncome.value - +amount;
        monthlyIncome.value = newmonthlyIncome;
        update(ref(db, "User/" + user.email + "/Finance/" + "/monthlyIncome/"), {
            MonthlyIncome: newmonthlyIncome
        })
        if (category == 1) {
            var newVal1 = +rentMeter.value + +amount;
            rentMeter.value = newVal1;
            update(ref(db, "User/" + user.email + "/Finance/" + "/Rent"), {
                Rent: newVal1
            })
        }

        else if (category == 2) {
            var newVal2 = +shoppingMeter.value + +amount;
            shoppingMeter.value = newVal2;
            update(ref(db, "User/" + user.email + "/Finance/" + "/Shopping"), {
                Shopping: newVal2
            })
        }

        else if (category == 3) {
            var newVal3 = +insuranceMeter.value + +amount;
            insuranceMeter.value = newVal3;
            update(ref(db, "User/" + user.email + "/Finance/" + "/Insurance"), {
                Insurance: newVal3
            })
        }

        else if (category == 4) {
            var newVal4 = +foodMeter.value + +amount;
            foodMeter.value = newVal4;
            update(ref(db, "User/" + user.email + "/Finance/" + "/Food"), {
                Food: newVal4
            })
        }

        else if (category == 5) {
            var newVal5 = +otherMeter.value + +amount;
            otherMeter.value = newVal5;
            update(ref(db, "User/" + user.email + "/Finance/" + "/Other"), {
                Other: newVal5
            })
        }
    }

    //gets current month
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let name = month[d.getMonth()];
    document.getElementById("month").innerHTML = name;
    //resets everything on the first of every month
    let day = d.getDate();
    if (day == 1) {
        update(ref(db, "User/" + user.email + "/Finance/" + "/Rent"), {
            Rent: 0,
            RentMax: 0
        })
        update(ref(db, "User/" + user.email + "/Finance/" + "/Shopping"), {
            Shopping: 0,
            ShoppingMax: 0
        })
        update(ref(db, "User/" + user.email + "/Finance/" + "/Insurance"), {
            Insurance: 0,
            InsuranceMax: 0
        })
        update(ref(db, "User/" + user.email + "/Finance/" + "/Food"), {
            Food: 0,
            FoodMax: 0
        })
        update(ref(db, "User/" + user.email + "/Finance/" + "/Other"), {
            Other: 0,
            OtherMax: 0
        })
    }

    //extra stuff
    //update(ref(db, "User/" + user.displayName + "/GoalSavings/" + category.value),{ })
    /*var addButton=document.querySelector("#addButton");
    addButton.addEventListener('click', CreateItem);*/

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            work();
        } else {
            console.log("error")
        }
    })
}