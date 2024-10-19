
    let bank = null;
    let bankAmount = null;
    

    async function loadProducts() {
      try {
        const response = await fetch('items.json');
        const items = await response.json();
        const container = document.getElementById('shop-grid');
        bank = await get(ref(db, testUser + "/Bank/"));
        bankAmount = bank.child("Money").val();
        let bankDiv = document.getElementById("bank");
        bankDiv.innerHTML = bankAmount;
        items.forEach(item => {
          const productDiv = document.createElement('div');
          productDiv.className = 'shop-item';
          productDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>${item.description}</p>
            `;
            productDiv.appendChild(createProductButton(item));
            container.appendChild(productDiv);
            FindData(item);
        });
      } catch (error) {
        console.error('Error Loading Products: ', error);
      }
    }

    function createProductButton(item) {
      const button = document.createElement('button');
      button.id = "button" + item.id.toString();
      button.innerText = "Add to Cart";
      button.onclick = () => CheckCanBuy(item);
      console.log(button.id);
      return button;
    }


    async function CheckCanBuy(unparsedItem) {
      console.log(unparsedItem);
      let potentialItem = unparsedItem;
      let itemExists = await FindData(potentialItem);
      let temp = "button" + potentialItem.id.toString();
      let button = document.getElementById(temp);
      console.log(button);
      console.log(bankAmount);
      if ((bankAmount >= potentialItem.price) && !itemExists){
        UpdateButton(button, potentialItem);
        CreateItem(potentialItem);
        UpdateBankSub(potentialItem.price);
        
        console.log('bought');
      }
      else{
        console.log("item exists already: ", itemExists);
        console.log("funds available: ", bankAmount >= potentialItem.price);
      }
    }


//needs to be integrated into a database concept, right now it is just test values
    async function UpdateBankSub(price){
      //visual
      bankAmount -= price;
      let bank = document.getElementById("bank");
      bank.innerHTML = bankAmount;
      console.log(bankAmount);
      //db
      UpdateData(bankAmount);
    }


    async function UpdateBankAdd(amount){
      //visual
      bankAmount += amount;
      let bank = document.getElementById("bank");
      bank.innerHTML = bankAmount;
      console.log(bankAmount);
      //db
      UpdateData(bankAmount);
    }


//temp button to add money for testing
    // let addMoneyButton = document.getElementById('addMoneyButton');
    // addMoneyButton.addEventListener('click', function() {
    //   UpdateBankAdd(10);
    //   console.log('hello');

    // })





    function CreateItem(addedItem){
      //console.log(addedItem);
    set(ref(db, testUser + "/" + "Inventory/" + addedItem.name), {
        Item: addedItem.name
    })
    .then(() => {
      //console.log("Data Created");
    })
    .catch((error) => {
        console.log(error);
      })
  }

    function FindData(item) {
      const dbref = ref(db);
      let temp = "#button" + item.id.toString();
      let button = document.querySelector(temp);
    
      return get(child(dbref, testUser + "/Inventory/" + item.name))
        .then((snapshot) => {
          //console.log(temp);
          if (snapshot.exists()){
            UpdateButton(button, snapshot.val().Item);
            return true;
          } else {
            //console.log("No Data Found");
            return false;
          }
        })
        .catch((error) => {
          console.log(error);
          return false;
        });
    }

    function UpdateData(value) {
      update(ref(db, testUser + "/Bank/"), {
        Money: value
      })
      .then(() => {
        console.log("Data Updated");
      })
      .catch((error) => {
        console.log(error);
      })
    }
//unused
    function RemoveData() {
      remove(ref(db, "Groups/" + enterID.value))
      .then(() => {
        console.log("Data Removed");
      })
      .catch((error) => {
        console.log(error);
      })
    }

    function UpdateButton(button, item){
      button.innerHTML = 'Bought';
      button.classList.add('buttonBought');
    }

    function AddToInventory() {
      console.log('hi');
      /* this appends but in a store nothing is added, it is added in the inventory not here 
      simply add to the database instead */
      const newItem = document.getElementById("createItem").value;
      const shopItem = document.createElement("shop-item");
      shopItem.textContent = newItem;   
      document.getElementById("shop-grid").appendChild(shopItem);
      document.getElementById("createItem").value = "";
    }

    document.addEventListener('DOMContentLoaded', function() {
      console.log('imhere');
    });