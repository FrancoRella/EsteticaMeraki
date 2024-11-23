
const navElements =[
  {title: `Home`, link : `../Pages/Home.html`},
  {title: `Registro`, link : `../Pages/Registro.html`},
  {title: `Productos`, link : `../Pages/Productos.html`},
  {title: `Login`, link : `../Pages/Login.html`},

]

const navLogout=[
  {link : `../Pages/Login.html`},
]

const navElementsR = [
 {class: 'navbar-brand', title: 'Carrito', link: `../Pages/Carrito.html`}]
    


export const navBar = `
 <nav class="navbar  custom-navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <a class="navbar-brand custom-nav" href="#">LB</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "><i class="bi bi-toggles2 fs-3"></i></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ">
                
                  
                 ${
                    navElements.map(e=> {
                       return `
                       <li class="nav-item ">
                       <a class="nav-link active custom-nav" href=${e.link}>${e.title}</a>
                       </li>
                       `
                    }).join('')
                }

                 
                </ul>    
         
                 <div class="ms-auto">   
                    ${
                  navElementsR.map(e => {
                return ` <a class="${e.class}" href="${e.link}">${e.title}</a>`
                }).join('')
                 }    
                    
                   
                  ${
                    navLogout.map(e=>{
                      return `<a href= ${e.link} class="btn btn-danger" ><i class="bi bi-door-open"></i></a>`
                    }
              
                    )
                  
                  
                  }
                
                 
              </div>    
          </div>
        </div>
      </nav>
`


