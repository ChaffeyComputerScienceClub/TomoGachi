
async function invLoadInventory() {
    try {
      const response = await fetch('items.json');
      const items = await response.json();
      const container = document.getElementById('shop-grid');
      items.forEach(async item => {
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
          container.appendChild(productDiv);
        }
      });
    } catch (error) {
      console.error('Error Loading Products: ', error);
    }
  }




  function invFindData(item) {
    console.log(item);
    const dbref = ref(db);
    let temp = "#button" + item.id.toString();
    let button = document.querySelector(temp);
  
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
