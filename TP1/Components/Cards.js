export const cardsContainer = (img, Title, Desc, Precio, Id) =>{
       return`
       
       <div class="col-lg-3 col-md-6 col-sm-12 mb-4  ">
            <div class="card h-100" id="${Id}">
              <img src="${img}" class="card-img-top mx-auto" alt="Card image" id="img">
              <div class="card-body d-flex flex-column align-items-center ">
                <h5 class="card-title text-center fs-5"><a href="" ">${Title}</a></h5>
                <p id="Desc">${Desc}</p>
               <div class="d-flex flex-row mb-4">
                        <p style="margin: 0; display: inline; font-size:120%; color:Blue;">Precio: $</p>
                        <p style="margin: 0; display: inline; font-size:120%; color:Blue;" class="card-price" font-size:120%; color:LightBlue;>${Precio}</p>
                    </div>
               
                <div class="custom-div-buttonMasMenos">
                    <button class="btn btn-danger icon-button ml-2" data-accion="remove"> -            
                    </button>
                    <button class="btn btn-success icon-button" data-accion="add"> +
                    </button>
                </div>
              </div>
            </div>
          </div>
       
       `
}

