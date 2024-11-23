window.addEventListener('load', ()=>{
    sessionStorage.removeItem('userData');
})



document.getElementById('registro').addEventListener('click', function (){
    window.location.href = '../Pages/Registro.html';

});

document.getElementById('login').addEventListener('submit', function (event){
    event.preventDefault();

    let Email= document.getElementById('email').value;
    let Password = document.getElementById('password').value;

    fetch('../Data/Users.json').then(res => res.json()).then(users =>{
        const user = users.find(e => e.email == Email && e.password == Password);

        if(user) {
            sessionStorage.setItem('userData', JSON.stringify(user));
            window.location.href = '../Pages/Productos.html';
        } else {
            window.alert("Error, el usuario ingresado no fue encontrado");
        }
    });
});




/*document.getElementById('login')Seleccionamos el elemento del html

.addEventListener('submit', function (event)) cuando el usuario intente enviar el formulario va ejecutar la funcion que declaremos

event.preventDefault(); Para que el formualario me rediriga a la url asignada*/