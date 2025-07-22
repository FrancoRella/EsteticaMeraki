import { cardsContainer} from "./Cards.js";
import { getData, setData, removeElement} from "./localStorage.js";


let cardContainer = document.getElementById('containerChild');



window.addEventListener('load', () => {
    fetch('../Data/Cards.json').then(res => res.json()).then(json => {

       
        const cards = json.map(e => {
            return cardContainer.innerHTML = cardsContainer(e.img, e.Title, e.Desc, e.Precio, e.Id);

        }).join('');


        cardContainer.innerHTML = cards;

    });
});

cardContainer.addEventListener('click', Event => {

    const actions = Event.target.dataset.accion;

    if (actions) {
        const cardElement = Event.target.closest('.card');
          console.log('cardElement:', cardElement);
        console.log('cardElement.id:', cardElement.id);

        const cardData = {
           Title: cardElement.querySelector('.card-title').textContent.trim(),
           Precio: parseFloat(cardElement.querySelector('.card-price').textContent.trim()),
           Id: cardElement.id
        }

        if (actions === 'add') {

            addItem(cardData);

        } else if (actions=== 'remove') {

            removeItem(cardData);

        }
    }
});

const addItem = cardData => {

    console.log("✅ Click en botón +", cardData);
    const res = getData('itemsData');

    if (res.length == 0) {
        cardData.Count=1;
        res.push(cardData)
    }
    else {
        let aux = res.findIndex(({ Id }) => Id === cardData.Id);
        if (aux != -1) {
            res[aux].Count = res[aux].Count + 1
        } else {
            cardData.Count=1;
            res.push(cardData)
        }
    }
    setData('itemsData', res);
    updateCounterDisplay();
};

const removeItem = cardData => {
    console.log('✅ BOTÓN - detectado', cardData);
    let res = getData('itemsData');

    if (res.length !== 0) {
        let aux = res.findIndex(({ Id }) => Id === cardData.Id);
        if (aux !== -1) {
            if (res[aux].Count > 0) {
                res[aux].Count -= 1; // decrementa mientras sea mayor a 0
            }

            if (res[aux].Count === 0) {
                res = removeElement(res, cardData.Id); // elimina cuando llega a 0
            }
        }
        setData('itemsData', res);
        updateCounterDisplay();
    }
};


const updateCounterDisplay = () => {
    const itemsData = getData('itemsData');
    itemsData.forEach(item => {
        const card = document.getElementById(item.Id);
        if (card) {
            const counterElement = card.querySelector('.custom-div-buttonMasMenos .counter');
            if (counterElement) {
                counterElement.innerText = item.Count; // Actualizamos el contador en el DOM
            }
        }
    });
};

window.addEventListener('load', () => {
    fetch('../Data/Cards.json').then(res => res.json()).then(json => {
        const cards = json.map(e => {
            // Buscamos si el producto ya existe en el carrito (localStorage)
            const storedItem = getData('itemsData').find(item => item.Id === e.Id);
            const count = storedItem ? storedItem.Count : 0; // Si existe, usamos su contador
            return cardsContainer(e.img, e.Title, e.Desc, e.Precio, e.Id, count); // Pasamos el contador a la card
        }).join('');
        
        cardContainer.innerHTML = cards;
        updateCounterDisplay(); // Actualizamos los contadores al cargar
    });
});



