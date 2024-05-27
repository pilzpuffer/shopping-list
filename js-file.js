      const list = document.querySelector("ul");
      const input = document.querySelector("input");
      const button = document.querySelector(".add");
      const setSound = document.querySelector(".sound")
      let soundAdd = document.querySelector("#soundAdd");
      let soundDelete = document.querySelector("#soundDelete");
      let countClicks = 0;

      
      function toggleSound() {
        countClicks++;

        if (countClicks % 2 == 0) {
            setSound.textContent = "🔊";
        } else {
            setSound.textContent = "🔇";
        }
    }    

      function addItem () {
   

        if (input.value === "") {
          alert("Nothing was added");
          return;
        }
        
        if (setSound.textContent == "🔊"){
        soundAdd.play();
        setTimeout(createItem, 250);
        } else {
            createItem();
        }

        function createItem() {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            if (setSound.textContent == "🔊") {
                soundDelete.play();
                setTimeout(() => {
                list.removeChild(listItem);
                }, 200)
            } else {
            list.removeChild(listItem);
            }
        });
        }
      }
    
      button.addEventListener('click', addItem);
      setSound.addEventListener('click', toggleSound)

      input.focus();