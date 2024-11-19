
async function invLoadInventory(filter) {
    try {
      
        const response = await fetch('items.json');
        const items = await response.json();
        const container = document.getElementById('shop-grid');
        items.forEach(async item => {
          if ((item.filter == filter) || (filter == "All")) {
          let hasItem = await invFindData(item);
          console.log(hasItem);
          if (hasItem){
          const productDiv = document.createElement('div');
          productDiv.className = 'shop-item';
          productDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>${item.description}</p>
            `;
            productDiv.appendChild(invCreateProductButton(item));
            container.appendChild(productDiv);
          }
        }
      });
    } catch (error) {
      console.error('Error Loading Products: ', error);
    }
  }



  function invCreateProductButton(item) {
    const button = document.createElement('button');
    button.id = "button" + item.id.toString();
    button.innerText = "Use Item";
    button.onclick = () => shopCheckCanBuy(item);
    console.log(button.id);
    return button;
  }



  function invFindData(item) {
    console.log(item);
    const dbref = ref(db);
  
    return get(child(dbref, testUser + "/Inventory/" + item.name))
      .then((snapshot) => {
        //console.log(temp);
        if (snapshot.exists()){
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


  function invUpdateButton(button, item){
    button.innerHTML = 'Used Item';
    button.classList.add('buttonBought');
  }