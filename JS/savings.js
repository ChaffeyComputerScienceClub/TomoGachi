var dateInput=document.getElementById("dateInput");
var amountInput=document.getElementById("amountInput");
var titleInput=document.getElementById("titleInput");
var userName=document.getElementById("userName");

function CreateItem(){
    var user=auth.currentUser;
    console.log(user);
    generate(amountInput.value, titleInput.value, dateInput.value);
    set(ref(db, "User/" + user.uid + "/GoalSavings/" + titleInput.value),{
    GoalDate: dateInput.value,
    GoalAmount: amountInput.value
})
}

function generate(amountValue, titleInput, dateInput){
var title = document.createElement("h2");
title.innerHTML = titleInput;
document.body.appendChild(title);

var current=document.createElement("h3");
current.innerHTML=0;
document.body.appendChild(current);

var goal=document.createElement("h3");
goal.innerHTML=amountValue;
document.body.appendChild(goal);

var meter=document.createElement("meter");
meter.max=amountValue;
meter.min=0;
meter.value=0;
document.body.appendChild(meter);
//newElement.classList.add("my-class"); // Add a CSS class
}


/*var addButton=document.querySelector("#addButton");
addButton.addEventListener('click', CreateItem);*/


//update(ref(db, "User/" + user.displayName + "/GoalSavings/" + category.value),{ })


onAuthStateChanged(auth, (user)=>{
    if(user){
    console.log(user);
    }else{
    console.log("error")
    }
})
