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

        const cardData = {
            Title: cardElement.querySelector('.card-title').textContent,
            Precio: cardElement.querySelector('.card-price').textContent,
            Id: cardElement.Idd
        }

        if (actions === 'add') {

            addItem(cardData);

        } else if (actions=== 'remove') {

            removeItem(cardData);

        }
    }
});

const addItem = cardData => {

    const res = getData('itemsData');

    if (res.length == 0) {
        res.push(cardData)
    }
    else {
        let aux = res.findIndex(({ Id }) => Id === cardData.Id);
        if (aux != -1) {
            res[aux].Count = res[aux].Count + 1
        } else {
            res.push(cardData)
        }
    }
    setData('itemsData', res);
};

const removeItem = cardData => {
    let res = getData('itemsData');

    if (res.length !== 0) {
        
        res = removeElement(res, cardData.Id)

        setData('itemsData', res);
    }
};



