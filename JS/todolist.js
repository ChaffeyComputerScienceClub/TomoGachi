var addButton=document.getElementById("addButton");
addButton.addEventListener('click', NewItem);

var ITEM_AMOUNT=0;

function CreateItem(inputText){
  var input = document.createElement("input");
  input.type="text";
  var div=document.getElementById("div");
  input.placeholder="untitled";
  var br=document.createElement("<br>");
  document.body.appendChild(br);
  
  // var num=2;
  // input.id="tb"+num.toString();
  
// set(ref(db, "User/" + user.displayName + "/toDoList/"),{
    
// })
}

var div=document.getElementById("div");
var ITEM_AMOUNT=0;

function NewItem(){
  var user=auth.currentUser;
  const clone=div.cloneNode(true);
  document.body.appendChild(clone);
  clone.style.visibility="visible";
  ITEM_AMOUNT +=1;
  set(ref(db, "User/" + user.displayName + "/toDoList/" + "/itemAmount/"),{
    amount:ITEM_AMOUNT
  })
}


var tb=document.getElementById("tb");
tb.addEventListener('focusout', save);

function save(){
  var user=auth.currentUser;
  var name=event.target.id;
  console.log(name);
  var item=event.target.value;
  console.log(item);
  set(ref(db, "User/" + user.displayName + "/toDoList/" + name),{
    Item:item
  })
}



function PageLoad() {
  var user=auth.currentUser;
  get(ref(db, "User/" + user.displayName + "/toDoList/" + name))
  .then((snapshot) => {
    if (snapshot.exists()){
      for(let i = 0; i < Object.keys(snapshot.val()).length-1; i++) {
        CreateItem(snapshot.val());
      }
      return true;
    }
  })
  .catch((error) => {
    console.log(error);
  });

};

onAuthStateChanged(auth, (user)=>{
  if(user){
    console.log(user);
    PageLoad();
  }else{
    console.log("error")
  }
})