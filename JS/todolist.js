var ITEM_AMOUNT=1;

function CreateItem(inputText){
  var user=auth.currentUser;
  const container = document.getElementById("shop-grid");
  const toDoDiv = document.createElement('div'); 
  toDoDiv.style ="display: flex; margin-left: 1rem;";
  toDoDiv.id = "todoDiv";
  toDoDiv.innerHTML = `
    <input type="checkbox" id="cb" class="cbStyle">
    <input type="text" value=${inputText} id=${ITEM_AMOUNT} class="tb">
    `;
  
  container.appendChild(toDoDiv);
  const elements = document.querySelectorAll(".tb");
  
  elements.forEach((element) => {
    element.addEventListener('focusout', () => {
      console.log("test");
      console.log(element.id, element.innerHTML);
      save(element.id, element.value);
    })

    // element.addEventListener('change', () => {
    //   console.log("this is checked");
    //   console.log(element.id, element.innerHTML);
    //   deleteItem(element.id, element.value);
    // })

  })
  set(ref(db, "User/" + "lizzymak" + "/toDoList/" + ITEM_AMOUNT),{
    Item: inputText
  })
  ITEM_AMOUNT += 1;
}

function deleteItem(id, text){
  console.log("deleted");
}

function save(id, text){
  console.log("saving");
  var user=auth.currentUser;
  set(ref(db, "User/" + "lizzymak" + "/toDoList/" + id),{
    Item: text
  })
}



function todoPageLoad() {
  const container = document.getElementById("shop-grid");
  const addButton = document.createElement('button'); 
  addButton.addEventListener('click', () => {
    CreateItem("Untitled");
  });
  container.append(addButton);
  var user=auth.currentUser;
  get(ref(db, "User/" + "lizzymak" + "/toDoList/"))
  .then((snapshot) => {
    if (snapshot.exists()){
      for(let i = 1; i <= Object.keys(snapshot.val()).length; i++) {
        CreateItem(snapshot.child(i.toString()).val().Item);
      }
      return true;
    }
  })
  .catch((error) => {
    console.log(error);
  });


 
};

onAuthStateChanged(auth, (user)=>{
  if(true){
    console.log(user);
    PageLoad();
  }else{
    console.log("error")
  }
})
