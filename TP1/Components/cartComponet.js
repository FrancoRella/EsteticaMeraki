import { navBar} from "./navBar.js";
import { getData, setData, deleteData, removeElement, updateCounter } from "./localStorage.js";

let navBarContainer = document.querySelector('header')

let montoTotal = 0;
let productCar = [];
const productsContainer = document.getElementById('product');
const btnContainer = document.getElementById('btnContainer');
const confirmar = document.getElementById('btnConfirmar');
const cancelar = document.getElementById('btnCancelar');

const getUserData = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}

window.addEventListener('load', () => {

    const userInfo = getUserData('userData');

    if (userInfo) {

        navBarContainer.innerHTML = navBar;


        productCar = getData('itemsData')

        carroActualizado();
    }
    else {
        window.location.href = '../Pages/login.html';
    }
})

productsContainer.addEventListener('click', Event => {

    const actions = Event.target.dataset.accion;

    if (actions) {
        const productos = Event.target.closest('.unit');

        const productId = productos.id

        if (actions === 'remove') {

            removCar(productId);
            carroActualizado();

        }
    }
});

confirmar.addEventListener('click', Event => {

    deleteData('itemsData');
    window.alert("Disfrute de su compra");
    productCar= [];
    carroActualizado();

});

cancelar.addEventListener('click', Event => {

    deleteData('itemsData');
    window.alert("Compra cancelada");
    productCar = [];
    carroActualizado();

});

function removCar(id) {
    montoTotal = 0;
    let productCar = getData('itemsData');

    if (productCar.length !== 0) {
        
        productCar = removeElement(productCar, id)

        setData('itemsData', productCar);

    }
}




function carroActualizado() {
    
    
    let productCar = getData('itemsData');
    montoTotal=0;
     productsContainer.innerHTML = ``;
    if (productCar.length > 0) {
        productCar.forEach((producto) => {
            montoTotal += parseFloat(producto.Precio );
            productsContainer.innerHTML += `
            <div class="unit" id="${producto.id}">
                <div class="d-flex justify-content-between align-items-center mt-1">
                <div class="d-flex flex-column">
                    <div>
                        <p style="margin: 0; display: inline; font-size:120%; color:Black; font-weight:bold;" class="me-3">Producto:</p>
                        <p style="margin: 0; display: inline; font-size:120% ">${producto.Title}</p>
                    </div>
                    <div>
                        <p style="margin: 0; display: inline; font-size:120%; color:Black; font-weight:bold;" class="me-3">Precio:</p>
                        <p style="margin: 0; display: inline; font-size:120%">$${producto.Precio}</p>
                        </div>
                            <hr class="bg-secondary border-2 border border-primary" />
                        </div>
              
            `;
        });
    } else {
        productsContainer.innerHTML = '<p style="margin: 0; display: inline; font-size:120%; color:Black; font-weight:bold;" class="me-3">No se agregaron productos al carro</p>';
        btnContainer.innerHTML = ``;
        montoTotal = 0
    }
    montoTotal = montoTotal.toFixed(2);
    document.getElementById('total').innerHTML = `Total: $${montoTotal}`;
}


