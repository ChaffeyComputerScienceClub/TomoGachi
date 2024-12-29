
async function shopLoadProducts(filter) {
  try {
    const response = await fetch('../items.json');
    const items = await response.json();
    const container = document.getElementById('shop-grid');
    items.forEach(item => {
      if ((item.filter == filter) || (filter == "All")) {
        const productDiv = document.createElement('div');
        productDiv.className = 'shop-item';
        productDiv.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
          <p>${item.description}</p>
          `;
          productDiv.appendChild(shopCreateProductButton(item));
          container.appendChild(productDiv);
          shopFindItem(item);
      }
    });
  } catch (error) {
    console.error('Error Loading Products: ', error);
  }
}

function shopCreateProductButton(item) {
  const button = document.createElement('button');
  button.id = "button" + item.id.toString();
  button.innerText = "Buy";
  button.onclick = () => shopCheckCanBuy(item);
  console.log(button.id);
  return button;
}


async function shopCheckCanBuy(unparsedItem) {
  console.log(unparsedItem);
  let potentialItem = unparsedItem;
  let itemExists = await shopFindItem(potentialItem);
  let temp = "button" + potentialItem.id.toString();
  let button = document.getElementById(temp);
  console.log(button);
  console.log(bankAmount);
  if ((bankAmount >= potentialItem.price) && !itemExists){
    shopUpdateButton(button, potentialItem);
    shopCreateItem(potentialItem);
    shopUpdateBankSub(potentialItem.price);
    shopUpdateItem(bankAmount - potentialItem.price);
    
    console.log('bought');
  }
  else{
    console.log("item exists already: ", itemExists);
    console.log("funds available: ", bankAmount >= potentialItem.price);
    shopUpdateItem(100);
  }
}

function shopCreateItem(addedItem){
  //console.log(addedItem);

set(ref(db, "User/" + user.displayName + "/Inventory/" + addedItem.name), {
    Item: addedItem.name
})
.then(() => {
  //console.log("Data Created");
})
.catch((error) => {
    console.log(error);
  })
}

function shopFindItem(item) {
  const dbref = ref(db);
  let temp = "#button" + item.id.toString();
  let button = document.querySelector(temp);

  return get(child(dbref, "User/" + user.displayName + "/Inventory/" + item.name))
    .then((snapshot) => {
      //console.log(temp);
      if (snapshot.exists()){
        shopUpdateButton(button);
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

function shopUpdateItem(value) {
  bankAmount = value;
  update(ref(db, "User/" + user.displayName + "/Bank/"), {
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
function shopRemoveItem() {
  remove(ref(db, "Groups/" + enterID.value))
  .then(() => {
    console.log("Data Removed");
  })
  .catch((error) => {
    console.log(error);
  })
}

function shopUpdateButton(button){
  button.innerHTML = 'Bought';
  button.classList.add('buttonBought');
}