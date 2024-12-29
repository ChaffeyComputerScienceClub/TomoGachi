var items = [];





function generateItems(text, id) {
  const container = document.getElementById("toDoList");
  const toDoDiv = document.createElement('div');
  toDoDiv.style = "display: flex; margin-left: 1rem;";
  if (text == null) {
    toDoDiv.innerHTML = `
        <input type="checkbox" id="cb-${id}" class="cb" class="cbStyle">
        <input type="text" placeholder="Untitled" id="tb-${id}" class="tb">
        `;
  }
  else {
    toDoDiv.innerHTML = `
        <input type="checkbox" id="cb-${id}" class="cb" class="cbStyle">
        <input type="text" value="${text}" id="tb-${id}" class="tb">
        `;
  }
  container.appendChild(toDoDiv);
  const checker = document.getElementById(`cb-${id}`);
  const typer = document.getElementById(`tb-${id}`);
  checker.addEventListener('click', () => {
    deleteItem(checker, checker.id.substring(3));
  })
  typer.addEventListener('focusout', () => {

    save(typer.value, typer.id.substring(3));
  })
}


function deleteItem(element, id) {
  var user = auth.currentUser;


  remove(ref(db, "User/" + user.uid + "/toDoList/" + id));

  reorderDB(element, id);
}


function reorderDB(element, id) {

  let num = items.length;
  items.splice(id, 1);


  for (let i = id; i <= num; i++) {
    let thing1 = document.getElementById(`cb-${i}`);
    let thing2 = document.getElementById(`tb-${i}`);

    thing1.id = `cb-${thing1.id.slice(3) - 1}`;
    thing2.id = `tb-${thing2.id.slice(3) - 1}`;
    if (items[i]) {
      items[i] -= 1;
    }
  }

  element.parentElement.remove();
  updateFirebase();

}


function save(text, id) {

  var user = auth.currentUser;
  id = (id).toString();

  set(ref(db, "User/" + user.uid + "/toDoList/" + id), {
    Item: text
  });
  updateFirebase();

}


function updateFirebase() {
  let lower = 0;
  let higher = 0;

  get(ref(db, "User/" + user.uid + "/toDoList/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let newPosition = 1; // Start storing at position 1
        const updates = {}; // Collect updates for repositioning
        const oldKeys = []; // Track old keys to remove
        snapshot.forEach((childSnapshot) => {
          const value = childSnapshot.val();
          const key = childSnapshot.key;
          higher++;
          // If the item exists and is valid, reposition it
          if (value && value.Item !== null && value.Item !== "") {
            updates[newPosition] = { Item: value.Item }; // New position data
            if (parseInt(key) !== newPosition) {

              oldKeys.push(key); // Track the key only if it needs to be replaced
            }

            lower++;
            newPosition++;
          } else {
            // If the item is invalid or empty, add it to the oldKeys for removal

            oldKeys.push(key);
          }
        });
        return update(ref(db, "User/" + user.uid + "/toDoList/"), updates).then(() => {
          return oldKeys
        });
      }
    })
    .then((oldKeys) => {
      // Remove old keys
      if (oldKeys) {
        if ((oldKeys.length != 1) && (oldKeys[higher - lower] != lower)) {
          oldKeys.shift();

        }

        if (oldKeys.length > 0) {
          const removalPromises = oldKeys.map((key) =>
            remove(ref(db, "User/" + user.uid + "/toDoList/" + key))
          );
          return Promise.all(removalPromises);
        }

      }
    })

}


function todoPageLoad() {
  let lower = 0;
  let higher = 0;
  const container = document.getElementById("shop-grid");
  const addButton = document.createElement('button');
  addButton.className = "toDoButton";
  addButton.innerHTML = "Add Item";
  addButton.addEventListener('click', () => {
    generateItems(null, items.length + 1);
    items.push(items.length + 1);
  });
  container.append(addButton);
  const listContainer = document.createElement('div');
  listContainer.id = "toDoList";
  listContainer.className = "shop-grid";
  container.append(listContainer);
  get(ref(db, "User/" + user.uid + "/toDoList/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let newPosition = 1; // Start storing at position 1
        const updates = {}; // Collect updates for repositioning
        const oldKeys = []; // Track old keys to remove
        snapshot.forEach((childSnapshot) => {
          const value = childSnapshot.val();
          const key = childSnapshot.key;
          higher++;
          // If the item exists and is valid, reposition it
          if (value && value.Item !== null && value.Item !== "") {
            updates[newPosition] = { Item: value.Item }; // New position data
            if (parseInt(key) !== newPosition) {

              oldKeys.push(key); // Track the key only if it needs to be replaced
            }

            lower++;
            newPosition++;
          } else {
            // If the item is invalid or empty, add it to the oldKeys for removal

            oldKeys.push(key);
          }
        });

        // Apply all updates in one  go
        return update(ref(db, "User/" + user.uid + "/toDoList/"), updates).then(() => {
          return oldKeys
        });
      } else {

        return Promise.resolve([]); // Return empty array if no data
      }
    })
    .then((oldKeys) => {
      // Remove old keys
      if (oldKeys) {
        if ((oldKeys.length != 1) && (oldKeys[higher - lower] != lower)) {
          oldKeys.shift();

        }

        if (oldKeys.length > 0) {
          const removalPromises = oldKeys.map((key) =>
            remove(ref(db, "User/" + user.uid + "/toDoList/" + key))
          );
          return Promise.all(removalPromises);
        }

      }
    })
    .then(() => {
      get(ref(db, "User/" + user.uid + "/toDoList/"))
        .then((snapshot) => {
          if (snapshot) {
            let offset = 0;
            Object.keys(snapshot.val()).forEach((i) => {
              if (snapshot.child(i.toString()).val().Item !== "") {

                generateItems(snapshot.child(i.toString()).val().Item, i);
                items.push(i - offset);

                if (offset > 0) { offset--; };

              }
              else {
                offset++;
              }
            })
          }

        }).catch((error) => {
          console.error(error);
        });

    })
    .catch((error) => {
      console.error("Error repositioning items:", error);
    });

}

