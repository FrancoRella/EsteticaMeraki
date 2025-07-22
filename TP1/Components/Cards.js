export const cardsContainer = (img, Title, Desc, Precio, Id, Count = 0) => {
    return `
        <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div class="card h-100" id="${Id}">
                <img src="${img}" class="card-img-top mx-auto" alt="Card image">
                <div class="card-body d-flex flex-column align-items-center">
                    <h5 class="card-title text-center fs-5"><a href="#">${Title}</a></h5>
                    <p id="Desc">${Desc}</p>
                    <div class="d-flex flex-row mb-4">
                        <p style="margin: 0; font-size:120%; color:Blue;">Precio: $</p>
                        <p class="card-price" style="margin: 0; font-size:120%; color:Blue;">${Precio}</p>
                    </div>
                    
                    <div class="custom-div-buttonMasMenos d-flex align-items-center gap-2">
                        <button class="btn btn-danger" data-accion="remove">-</button>
                        <span class="counter">${Count}</span>
                        <button class="btn btn-success" data-accion="add">+</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};



